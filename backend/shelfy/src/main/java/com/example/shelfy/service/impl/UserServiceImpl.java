package com.example.shelfy.service.impl;

import com.example.shelfy.entity.User;
import com.example.shelfy.exceptions.ResourceNotFoundException;
import com.example.shelfy.exceptions.UnauthorizedException;
import com.example.shelfy.repository.UserRepository;
import com.example.shelfy.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null) {
            throw new UnauthorizedException("User not authenticated");
        }

        String email = authentication.getName();
        return this.getUserByEmail(email);
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
}
