package com.example.shelfy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class SellerResponse {
    private Long id;
    private String name;
    private String email;
    private String businessName;
    private String gstin;
    private LocalDateTime createdAt;
    private Long totalOrders;
}
