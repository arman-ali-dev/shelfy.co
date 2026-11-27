package com.example.shelfy.repository;

import com.example.shelfy.entity.Category;
import com.example.shelfy.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByOrderByCreatedAtDesc();
}
