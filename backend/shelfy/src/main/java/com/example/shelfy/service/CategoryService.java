package com.example.shelfy.service;

import com.example.shelfy.dto.request.CreateCategoryRequest;
import com.example.shelfy.dto.request.UpdateCategoryRequest;
import com.example.shelfy.dto.response.CategoryResponse;
import com.example.shelfy.entity.Category;

import java.util.List;

public interface CategoryService {
    CategoryResponse createCategory(CreateCategoryRequest request);

    List<CategoryResponse> getAllCategories();

    List<CategoryResponse> getSubCategories(Long id);

    CategoryResponse getCategory(Long id);

    void deleteCategory(Long id);

    CategoryResponse updateCategory(Long id, UpdateCategoryRequest request);

    Category getCategoryById(Long id);
}
