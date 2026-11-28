package com.example.shelfy.controller.customer;

import com.example.shelfy.dto.response.ProductResponse;
import com.example.shelfy.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("/{productId}")
    public ResponseEntity<ProductResponse> getProductHandler(@PathVariable Long productId) {
        ProductResponse response = productService.getProduct(productId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProductResponse>> getAllProductsHandler() {
        List<ProductResponse> response = productService.getProducts();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/best-seller")
    public ResponseEntity<List<ProductResponse>> getBestSellerProductsHandler() {
        List<ProductResponse> response = productService.getBestSellerProducts();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<ProductResponse>> getProductsByCategoryHandler(@PathVariable Long categoryId) {
        List<ProductResponse> response = productService.getProductsByCategory(categoryId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ProductResponse>> searchProductsHandler(
            @RequestParam("keyword") String keyword) {
        List<ProductResponse> response = productService.searchProducts(keyword);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{productId}/similar")
    public ResponseEntity<List<ProductResponse>> getSimilarProductsHandler(@PathVariable Long productId) {
        List<ProductResponse> response = productService.getSimilarProducts(productId);
        return ResponseEntity.ok(response);
    }


}
