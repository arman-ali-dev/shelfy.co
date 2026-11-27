package com.example.shelfy.service;

import com.example.shelfy.entity.User;

public interface UserService {
    User getCurrentUser();

    User getUserByEmail(String email);
}
