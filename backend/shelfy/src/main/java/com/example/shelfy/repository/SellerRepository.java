package com.example.shelfy.repository;

import com.example.shelfy.entity.Category;
import com.example.shelfy.entity.Seller;
import com.example.shelfy.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SellerRepository extends JpaRepository<Seller, Long> {
    Seller findByUser(User user);
    List<Seller> findAllByOrderByCreatedAtDesc();
}
