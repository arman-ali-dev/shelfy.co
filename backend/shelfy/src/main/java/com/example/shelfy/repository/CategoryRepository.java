package com.example.shelfy.repository;

import com.example.shelfy.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findByParentCategory_Id(Long id);
    List<Category> findAllByOrderByCreatedAtDesc();
}
