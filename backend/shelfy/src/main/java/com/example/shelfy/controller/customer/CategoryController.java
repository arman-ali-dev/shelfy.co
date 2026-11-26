package com.example.shelfy.controller.customer;

import com.example.shelfy.dto.response.CategoryResponse;
import com.example.shelfy.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/{id}")
    public ResponseEntity<CategoryResponse> getCategoryHandler(@PathVariable Long id) {
        CategoryResponse response = categoryService.getCategory(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all")
    public ResponseEntity<List<CategoryResponse>> getCategoriesHandler() {
        List<CategoryResponse> response = categoryService.getAllCategories();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/sub/{id}")
    public ResponseEntity<List<CategoryResponse>> getSubCategoriesHandler(@PathVariable Long id) {
        List<CategoryResponse> response = categoryService.getSubCategories(id);
        return ResponseEntity.ok(response);
    }
}
