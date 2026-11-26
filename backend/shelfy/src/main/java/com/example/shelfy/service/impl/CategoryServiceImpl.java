package com.example.shelfy.service.impl;

import com.example.shelfy.dto.request.CreateCategoryRequest;
import com.example.shelfy.dto.request.UpdateCategoryRequest;
import com.example.shelfy.dto.response.CategoryResponse;
import com.example.shelfy.entity.Category;
import com.example.shelfy.exceptions.ResourceNotFoundException;
import com.example.shelfy.repository.CategoryRepository;
import com.example.shelfy.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public CategoryResponse createCategory(CreateCategoryRequest request) {
        Category parentCategory = this.getCategoryById(request.getParentCategoryId());

        Category category = new Category();
        category.setName(request.getName());
        category.setDescription(request.getDescription());
        category.setParentCategory(parentCategory);
        category.setImage(request.getImage());

        Category savedCategory = categoryRepository.save(category);

        return new CategoryResponse(
                savedCategory.getName(),
                savedCategory.getDescription(),
                savedCategory.getImage());
    }

    @Override
    public List<CategoryResponse> getAllCategories() {
        return categoryRepository.findAll()
                .stream()
                .map(this::mapToCategoryResponse)
                .toList();
    }

    @Override
    public List<CategoryResponse> getSubCategories(Long id) {
        return categoryRepository.findByParentCategory_Id(id)
                .stream()
                .map(this::mapToCategoryResponse)
                .toList();
    }

    @Override
    public CategoryResponse getCategory(Long id) {
        return mapToCategoryResponse(getCategoryById(id));
    }

    @Override
    public void deleteCategory(Long id) {
        Category category = this.getCategoryById(id);
        categoryRepository.delete(category);
    }

    @Override
    public CategoryResponse updateCategory(Long id, UpdateCategoryRequest request) {
        Category existingCategory = this.getCategoryById(id);
        Category parentCategory = this.getCategoryById(request.getParentCategoryId());

        existingCategory.setName(request.getName());
        existingCategory.setDescription(request.getDescription());
        existingCategory.setImage(request.getImage());
        existingCategory.setParentCategory(parentCategory);

        return mapToCategoryResponse(categoryRepository.save(existingCategory));
    }

    @Override
    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
    }

    private CategoryResponse mapToCategoryResponse(Category category) {
        return new CategoryResponse(category.getName(), category.getDescription(), category.getImage());
    }
}
