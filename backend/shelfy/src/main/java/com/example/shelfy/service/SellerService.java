package com.example.shelfy.service;

import com.example.shelfy.dto.request.BecomeSellerRequest;
import com.example.shelfy.dto.request.UpdateSellerProfileRequest;
import com.example.shelfy.dto.response.AuthResponse;
import com.example.shelfy.dto.response.SellerProfileResponse;
import com.example.shelfy.dto.response.SellerResponse;
import com.example.shelfy.entity.Seller;

import java.util.List;

public interface SellerService {
    AuthResponse becomeSeller(BecomeSellerRequest request);

    SellerProfileResponse getSellerProfile(Long id);

    List<SellerResponse> getAllSellers();

    SellerProfileResponse updateSeller(Long id, UpdateSellerProfileRequest request);

    void deleteSeller(Long id);

    Seller getSellerById(Long id);
}
