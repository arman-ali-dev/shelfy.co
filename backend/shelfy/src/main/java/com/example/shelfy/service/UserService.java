package com.example.shelfy.service;

import com.example.shelfy.dto.request.UpdateUserProfileRequest;
import com.example.shelfy.dto.response.UserProfileResponse;
import com.example.shelfy.entity.User;

public interface UserService {
    User getCurrentUser();

    User getUserByEmail(String email);

    UserProfileResponse getProfile();

    UserProfileResponse updateProfile(UpdateUserProfileRequest request);
}
