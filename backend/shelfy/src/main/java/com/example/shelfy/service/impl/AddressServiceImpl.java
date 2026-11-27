package com.example.shelfy.service.impl;

import com.example.shelfy.dto.request.CreateAddressRequest;
import com.example.shelfy.dto.request.UpdateAddressRequest;
import com.example.shelfy.dto.response.AddressResponse;
import com.example.shelfy.entity.Address;
import com.example.shelfy.entity.User;
import com.example.shelfy.exceptions.ResourceNotFoundException;
import com.example.shelfy.exceptions.UnauthorizedAccessException;
import com.example.shelfy.repository.AddressRepository;
import com.example.shelfy.service.AddressService;
import com.example.shelfy.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;
    private final UserService userService;

    @Override
    public AddressResponse createAddress(CreateAddressRequest request) {
        User currentUser = userService.getCurrentUser();
        Address address = new Address(
                currentUser,
                request.getName(),
                request.getPhoneNumber(),
                request.getPinCode(),
                request.getAddress(),
                request.getLocality(),
                request.getCity(),
                request.getState());

        return mapToAddressResponse(addressRepository.save(address));
    }

    @Override
    public AddressResponse updateAddress(Long id, UpdateAddressRequest request) {
        User currentUser = userService.getCurrentUser();
        Address existingAddress = this.getAddressById(id);

        if (!currentUser.getId().equals(existingAddress.getUser().getId())) {
            throw new UnauthorizedAccessException("You're not authorized to update this address");
        }

        existingAddress.setName(request.getName());
        existingAddress.setPhoneNumber(request.getPhoneNumber());
        existingAddress.setPinCode(request.getPinCode());
        existingAddress.setAddress(request.getAddress());
        existingAddress.setLocality(request.getLocality());
        existingAddress.setCity(request.getCity());
        existingAddress.setState(request.getState());

        return mapToAddressResponse(addressRepository.save(existingAddress));
    }

    @Override
    public void deleteAddress(Long id) {
        User currentUser = userService.getCurrentUser();
        Address address = this.getAddressById(id);

        if (!currentUser.getId().equals(address.getUser().getId())) {
            throw new UnauthorizedAccessException("You're not authorized to delete this address");
        }

        addressRepository.delete(address);
    }

    @Override
    public List<AddressResponse> getAllAddresses() {
        return addressRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::mapToAddressResponse)
                .toList();
    }

    @Override
    public AddressResponse getAddress(Long id) {
        return mapToAddressResponse(this.getAddressById(id));
    }

    @Override
    public Address getAddressById(Long id) {
        return addressRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Address not found"));
    }

    private AddressResponse mapToAddressResponse(Address address) {
        return new AddressResponse(
                address.getId(),
                address.getName(),
                address.getPhoneNumber(),
                address.getPinCode(),
                address.getAddress(),
                address.getLocality(),
                address.getCity(),
                address.getState()
        );
    }
}
