package com.example.shelfy.service;

import com.example.shelfy.entity.Cart;
import com.example.shelfy.entity.User;

public interface CartService {
    Cart createCart(User user);
}
