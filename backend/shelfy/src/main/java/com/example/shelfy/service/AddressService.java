package com.example.shelfy.service;

import com.example.shelfy.dto.request.CreateAddressRequest;
import com.example.shelfy.dto.request.UpdateAddressRequest;
import com.example.shelfy.dto.response.AddressResponse;
import com.example.shelfy.entity.Address;

import java.util.List;

public interface AddressService {
    AddressResponse createAddress(CreateAddressRequest request);

    AddressResponse updateAddress(Long id, UpdateAddressRequest request);

    void deleteAddress(Long id);

    List<AddressResponse> getAllAddresses();

    AddressResponse getAddress(Long id);

    Address getAddressById(Long id);
}
