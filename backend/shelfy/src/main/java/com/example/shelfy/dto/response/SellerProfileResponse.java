package com.example.shelfy.dto.response;

import com.example.shelfy.entity.Address;
import com.example.shelfy.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SellerProfileResponse {
    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    private String businessName;
    private String businessEmail;
    private Long businessMobileNumber;
    private String businessAddress;
    private String businessLogo;
    private String banner;
    private Long accountNumber;
    private String accountHolderName;
    private String ifscCode;
    private Address pickupAddress;
    private String gstin;
}
