package com.example.shelfy.dto.response;

import com.example.shelfy.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserProfileResponse {
    private String fullName;
    private String email;
    private String phoneNumber;
    private String profileImage;
    private UserRole role;
}
