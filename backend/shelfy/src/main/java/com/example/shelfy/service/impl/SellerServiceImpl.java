package com.example.shelfy.service.impl;

import com.example.shelfy.dto.request.BecomeSellerRequest;
import com.example.shelfy.dto.request.UpdateSellerProfileRequest;
import com.example.shelfy.dto.response.AuthResponse;
import com.example.shelfy.dto.response.SellerProfileResponse;
import com.example.shelfy.dto.response.SellerResponse;
import com.example.shelfy.entity.Address;
import com.example.shelfy.entity.Seller;
import com.example.shelfy.entity.User;
import com.example.shelfy.enums.UserRole;
import com.example.shelfy.exceptions.DuplicateResourceException;
import com.example.shelfy.exceptions.ResourceNotFoundException;
import com.example.shelfy.repository.AddressRepository;
import com.example.shelfy.repository.SellerRepository;
import com.example.shelfy.repository.UserRepository;
import com.example.shelfy.service.JwtService;
import com.example.shelfy.service.SellerService;
import com.example.shelfy.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SellerServiceImpl implements SellerService {

    private final SellerRepository sellerRepository;
    private final UserService userService;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    @Override
    @Transactional
    public AuthResponse becomeSeller(BecomeSellerRequest request) {
        User currentUser = userService.getCurrentUser();

        if (sellerRepository.findByUser(currentUser) != null) {
            throw new DuplicateResourceException("You're already a seller");
        }

        Address pickupAddress = new Address(
                currentUser,
                request.getPickupAddressName(),
                request.getPickupPhoneNumber(),
                request.getPickupPinCode(),
                request.getBusinessAddress(),
                request.getPickupLocality(),
                request.getPickupCity(),
                request.getPickupState()
        );

        Address savedPickupAddress = addressRepository.save(pickupAddress);

        Seller seller = new Seller(
                currentUser,
                request.getBusinessName(),
                request.getBusinessEmail(),
                request.getBusinessPhoneNumber(),
                request.getBusinessAddress(),
                request.getBusinessLogo(),
                request.getBanner(),
                request.getAccountNumber(),
                request.getAccountHolderName(),
                request.getIfscCode(),
                savedPickupAddress,
                request.getGstin()
        );

        currentUser.setRole(UserRole.SELLER);
        userRepository.save(currentUser);
        sellerRepository.save(seller);

        Authentication oldAuthentication = SecurityContextHolder.getContext().getAuthentication();

        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(UserRole.SELLER.toString()));
        Authentication newAuthentication = new UsernamePasswordAuthenticationToken(
                oldAuthentication.getPrincipal(),
                oldAuthentication.getCredentials(),
                authorities
        );

        SecurityContextHolder.getContext().setAuthentication(newAuthentication);
        return new AuthResponse("Registration Successfully", jwtService.generateToken(newAuthentication));
    }

    @Override
    public SellerProfileResponse getSellerProfile(Long id) {
        Seller seller = this.getSellerById(id);
        return mapToSellerProfileResponse(seller);
    }

    @Override
    public List<SellerResponse> getAllSellers() {
        return sellerRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::mapToSellerResponse)
                .toList();
    }

    @Override
    @Transactional
    public SellerProfileResponse updateSeller(Long id, UpdateSellerProfileRequest request) {
        Seller existingSeller = this.getSellerById(id);

        existingSeller.getUser().setFullName(request.getFullName());
        existingSeller.getUser().setEmail(request.getEmail());
        existingSeller.getUser().setPhoneNumber(request.getPhoneNumber());
        existingSeller.setBusinessName(request.getBusinessName());
        existingSeller.setBusinessEmail(request.getBusinessEmail());
        existingSeller.setBusinessMobileNumber(request.getBusinessPhoneNumber());
        existingSeller.setBusinessAddress(request.getBusinessAddress());
        existingSeller.setBusinessLogo(request.getBusinessLogo());
        existingSeller.setBanner(request.getBanner());
        existingSeller.setAccountNumber(request.getAccountNumber());
        existingSeller.setAccountHolderName(request.getAccountHolderName());
        existingSeller.setIfscCode(request.getIfscCode());
        existingSeller.getPickupAddress().setName(request.getPickupAddressName());
        existingSeller.getPickupAddress().setPhoneNumber(request.getPickupPhoneNumber());
        existingSeller.getPickupAddress().setPinCode(request.getPickupPinCode());
        existingSeller.getPickupAddress().setAddress(request.getPickupAddress());
        existingSeller.getPickupAddress().setLocality(request.getPickupLocality());
        existingSeller.getPickupAddress().setCity(request.getPickupCity());
        existingSeller.getPickupAddress().setState(request.getPickupState());

        userRepository.save(existingSeller.getUser());
        addressRepository.save(existingSeller.getPickupAddress());
        return mapToSellerProfileResponse(sellerRepository.save(existingSeller));
    }

    @Override
    @Transactional
    public void deleteSeller(Long id) {
        Seller seller = this.getSellerById(id);
        seller.getUser().setRole(UserRole.CUSTOMER);
        sellerRepository.delete(seller);
        addressRepository.delete(seller.getPickupAddress());
    }

    @Override
    public Seller getSellerById(Long id) {
        return sellerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Seller not found"));
    }

    @Override
    public Seller getSellerByUser(User user) {
        return sellerRepository.findByUser(user)
                .orElseThrow(() -> new ResourceNotFoundException("Seller not found"));
    }

    private SellerResponse mapToSellerResponse(Seller seller) {
        return new SellerResponse(
                seller.getId(),
                seller.getUser().getFullName(),
                seller.getUser().getEmail(),
                seller.getBusinessName(),
                seller.getGstin(),
                seller.getCreatedAt(),
                0L);
    }

    private SellerProfileResponse mapToSellerProfileResponse(Seller seller) {
        return new SellerProfileResponse(
                seller.getId(),
                seller.getUser().getFullName(),
                seller.getUser().getEmail(),
                seller.getUser().getPhoneNumber(),
                seller.getBusinessName(),
                seller.getBusinessEmail(),
                seller.getBusinessMobileNumber(),
                seller.getBusinessAddress(),
                seller.getBusinessLogo(),
                seller.getBanner(),
                seller.getAccountNumber(),
                seller.getAccountHolderName(),
                seller.getIfscCode(),
                seller.getPickupAddress(),
                seller.getGstin()
        );
    }
}
