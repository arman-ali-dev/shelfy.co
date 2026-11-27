package com.example.shelfy.service;

import com.example.shelfy.dto.request.CreateProductRequest;
import com.example.shelfy.dto.request.UpdateProductRequest;
import com.example.shelfy.dto.response.ProductResponse;
import com.example.shelfy.entity.Product;

import java.util.List;

public interface ProductService {
    ProductResponse createProduct(CreateProductRequest request);

    ProductResponse updateProduct(UpdateProductRequest request);

    ProductResponse getProduct(Long id);

    List<ProductResponse> getProducts();

    List<ProductResponse> getBestSellerProducts();

    List<ProductResponse> getProductsBySeller(Long sellerId);

    List<ProductResponse> getProductsByCategory(Long categoryId);

    List<ProductResponse> searchProducts(String keyword);

    List<ProductResponse> getSimilarProducts(Long id);

    void deleteProduct(Long id);

    Product getProductById(Long id);
}
