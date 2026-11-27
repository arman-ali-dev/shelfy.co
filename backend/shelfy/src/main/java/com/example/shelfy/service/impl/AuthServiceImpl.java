package com.example.shelfy.service.impl;

import com.example.shelfy.dto.request.LoginRequest;
import com.example.shelfy.dto.request.RegisterRequest;
import com.example.shelfy.dto.response.AuthResponse;
import com.example.shelfy.entity.Cart;
import com.example.shelfy.entity.User;
import com.example.shelfy.enums.UserRole;
import com.example.shelfy.exceptions.DuplicateResourceException;
import com.example.shelfy.repository.UserRepository;
import com.example.shelfy.service.AuthService;
import com.example.shelfy.service.CartService;
import com.example.shelfy.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final CartService cartService;


    @Override
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateResourceException("User is already exists");
        }

        User user = new User(
                request.getFullName(),
                request.getEmail(),
                request.getPhoneNumber(),
                passwordEncoder.encode(request.getPassword()),
                UserRole.CUSTOMER
        );

        User savedUser = userRepository.save(user);
        cartService.createCart(savedUser);

        Authentication authentication = authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken.unauthenticated(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        return new AuthResponse("Registration Successfully", jwtService.generateToken(authentication));
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        Authentication authenticationRequest = UsernamePasswordAuthenticationToken.unauthenticated(
                request.getEmail(),
                request.getPassword()
        );

        Authentication authentication = authenticationManager.authenticate(authenticationRequest);
        return new AuthResponse("Login successfully", jwtService.generateToken(authentication));
    }
}
