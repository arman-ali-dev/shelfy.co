package com.example.shelfy.service.impl;

import com.example.shelfy.dto.request.CreateProductRequest;
import com.example.shelfy.dto.request.UpdateProductRequest;
import com.example.shelfy.dto.response.CategoryResponse;
import com.example.shelfy.dto.response.ProductResponse;
import com.example.shelfy.entity.Product;
import com.example.shelfy.exceptions.ResourceNotFoundException;
import com.example.shelfy.repository.ProductRepository;
import com.example.shelfy.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public ProductResponse createProduct(CreateProductRequest request) {
        return null;
    }

    @Override
    public ProductResponse updateProduct(UpdateProductRequest request) {
        return null;
    }

    @Override
    public ProductResponse getProduct(Long id) {
        return null;
    }

    @Override
    public List<ProductResponse> getProducts() {
        return List.of();
    }

    @Override
    public List<ProductResponse> getBestSellerProducts() {
        return List.of();
    }

    @Override
    public List<ProductResponse> getProductsBySeller(Long sellerId) {
        return List.of();
    }

    @Override
    public List<ProductResponse> getProductsByCategory(Long categoryId) {
        return List.of();
    }

    @Override
    public List<ProductResponse> searchProducts(String keyword) {
        return List.of();
    }

    @Override
    public List<ProductResponse> getSimilarProducts(Long id) {
        return List.of();
    }

    @Override
    public void deleteProduct(Long id) {
        Product product = this.getProductById(id);
        productRepository.delete(product);
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    private ProductResponse mapToProductResponse(Product product) {
        return new ProductResponse(
                product.getId(),
                product.getName(),
                product.getDescription(),
                new CategoryResponse(
                        product.getCategory().getId(),
                        product.getCategory().getName(),
                        product.getCategory().getDescription(),
                        product.getCategory().getImage()),
                product.getVariants(),
                product.isBestSeller()
        );
    }
}
