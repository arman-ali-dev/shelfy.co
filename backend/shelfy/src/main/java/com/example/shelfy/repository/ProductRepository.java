package com.example.shelfy.repository;

import com.example.shelfy.entity.Category;
import com.example.shelfy.entity.Product;
import com.example.shelfy.entity.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByOrderByCreatedAtDesc();

    List<Product> findAllByIsBestSellerTrueOrderByCreatedAtDesc();

    List<Product> findAllBySellerOrderByCreatedAtDesc(Seller seller);

    List<Product> findAllByCategoryOrderByCreatedAtDesc(Category category);

    List<Product> findByNameContainingIgnoreCaseOrderByCreatedAtDesc(String keyword);

    List<Product> findTop12ByCategory_IdAndIdNotOrderByCreatedAtDesc(Long categoryId, Long productId);
}
