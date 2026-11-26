package com.example.shelfy.service;

import com.example.shelfy.dto.request.LoginRequest;
import com.example.shelfy.dto.request.RegisterRequest;
import com.example.shelfy.dto.response.AuthResponse;

public interface AuthService {
    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}
