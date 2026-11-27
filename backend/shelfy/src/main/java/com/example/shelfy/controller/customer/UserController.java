package com.example.shelfy.controller.customer;

import com.example.shelfy.dto.request.UpdateUserProfileRequest;
import com.example.shelfy.dto.response.UserProfileResponse;
import com.example.shelfy.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<UserProfileResponse> getProfileHandler() {
        UserProfileResponse response = userService.getProfile();
        return ResponseEntity.ok(response);
    }

    @PutMapping
    public ResponseEntity<UserProfileResponse> updateProfileHandler(
            @RequestBody @Valid UpdateUserProfileRequest request) {
        UserProfileResponse response = userService.updateProfile(request);
        return ResponseEntity.ok(response);
    }
}
