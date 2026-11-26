package com.example.shelfy.service.impl;

import com.example.shelfy.entity.Cart;
import com.example.shelfy.entity.User;
import com.example.shelfy.repository.CartRepository;
import com.example.shelfy.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;

    @Override
    public Cart createCart() {
        Cart cart = new Cart();
        cart.setSubTotalPrice(0L);
        cart.setTotalPrice(0L);
        cart.setDiscount(0.0);
        return cartRepository.save(cart);
    }
}
