package com.example.shelfy.dto.response;

import com.example.shelfy.entity.Address;
import com.example.shelfy.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class AddressResponse {
    private Long id;
    private String name;
    private String phoneNumber;
    private String pinCode;
    private String address;
    private String locality;
    private String city;
    private String state;
}
