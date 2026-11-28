package com.example.shelfy.service.impl;

import com.example.shelfy.dto.request.CreateProductRequest;
import com.example.shelfy.dto.request.CreateVariantRequest;
import com.example.shelfy.dto.request.UpdateProductRequest;
import com.example.shelfy.dto.response.CategoryResponse;
import com.example.shelfy.dto.response.ProductResponse;
import com.example.shelfy.dto.response.VariantResponse;
import com.example.shelfy.entity.*;
import com.example.shelfy.exceptions.ResourceNotFoundException;
import com.example.shelfy.exceptions.UnauthorizedAccessException;
import com.example.shelfy.repository.ProductRepository;
import com.example.shelfy.service.CategoryService;
import com.example.shelfy.service.ProductService;
import com.example.shelfy.service.SellerService;
import com.example.shelfy.service.UserService;
import lombok.RequiredArgsConstructor;
import org.jspecify.annotations.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryService categoryService;
    private final SellerService sellerService;
    private final UserService userService;

    @Override
    @Transactional
    public ProductResponse createProduct(CreateProductRequest request) {
        User currentUser = userService.getCurrentUser();
        Seller seller = sellerService.getSellerByUser(currentUser);
        Category category = categoryService.getCategoryById(request.getCategoryId());

        Product product = new Product();
        product.setSeller(seller);
        product.setCategory(category);
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setBestSeller(request.isBestSeller());
        product.setVariants(createVariants(request.getVariants(), product));

        return mapToProductResponse(productRepository.save(product));
    }

    @Override
    public ProductResponse updateProduct(Long id, UpdateProductRequest request) {
        User currentUser = userService.getCurrentUser();
        Seller seller = sellerService.getSellerByUser(currentUser);
        Product existingProduct = this.getProductById(id);
        Category category = categoryService.getCategoryById(request.getCategoryId());

        if (!seller.getId().equals(existingProduct.getSeller().getId())) {
            throw new UnauthorizedAccessException("You're not authorized to update this product");
        }

        existingProduct.setCategory(category);
        existingProduct.setName(request.getName());
        existingProduct.setDescription(request.getDescription());
        existingProduct.setBestSeller(request.isBestSeller());
        existingProduct.getVariants().clear();
        existingProduct.getVariants().addAll(createVariants(request.getVariants(), existingProduct));

        return mapToProductResponse(productRepository.save(existingProduct));
    }

    private Set<Variant> createVariants(List<CreateVariantRequest> requestVariants, Product product) {
        Set<Variant> variants = new HashSet<>();

        for (CreateVariantRequest variantRequest : requestVariants) {
            Variant variant = new Variant(
                    product,
                    variantRequest.getImages(),
                    variantRequest.getMrpPrice(),
                    variantRequest.getSellingPrice(),
                    variantRequest.getDiscount(),
                    variantRequest.getStock(),
                    variantRequest.getColor(),
                    variantRequest.getSize(),
                    variantRequest.getSpecifications(),
                    variantRequest.getKeyFeatures()
            );

            variants.add(variant);
        }
        return variants;
    }

    @Override
    public ProductResponse getProduct(Long id) {
        return mapToProductResponse(this.getProductById(id));
    }

    @Override
    public List<ProductResponse> getProducts() {
        return productRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::mapToProductResponse)
                .toList();
    }

    @Override
    public List<ProductResponse> getBestSellerProducts() {
        return productRepository.findAllByIsBestSellerTrueOrderByCreatedAtDesc()
                .stream()
                .map(this::mapToProductResponse)
                .toList();
    }

    @Override
    public List<ProductResponse> getProductsBySeller(Long sellerId) {
        Seller seller = sellerService.getSellerById(sellerId);
        return productRepository.findAllBySellerOrderByCreatedAtDesc(seller)
                .stream()
                .map(this::mapToProductResponse)
                .toList();
    }

    @Override
    public List<ProductResponse> getProductsByCategory(Long categoryId) {
        Category category = categoryService.getCategoryById(categoryId);
        return productRepository.findAllByCategoryOrderByCreatedAtDesc(category)
                .stream()
                .map(this::mapToProductResponse)
                .toList();
    }

    @Override
    public List<ProductResponse> searchProducts(String keyword) {
        return productRepository.findByNameContainingIgnoreCaseOrderByCreatedAtDesc(keyword)
                .stream()
                .map(this::mapToProductResponse)
                .toList();
    }

    @Override
    public List<ProductResponse> getSimilarProducts(Long id) {
        Product product = this.getProductById(id);
        return productRepository.findTop12ByCategory_IdAndIdNotOrderByCreatedAtDesc(
                        product.getCategory().getId(), product.getId())
                .stream()
                .map(this::mapToProductResponse)
                .toList();
    }

    @Override
    public void deleteProduct(Long id) {
        User currentUser = userService.getCurrentUser();
        Seller seller = sellerService.getSellerByUser(currentUser);
        Product product = this.getProductById(id);

        if (!seller.getId().equals(product.getSeller().getId())) {
            throw new UnauthorizedAccessException("You're not authorized to delete this product");
        }

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
                product.getVariants()
                        .stream()
                        .map(this::mapToVariantResponse)
                        .collect(Collectors.toSet()),
                product.isBestSeller()
        );
    }

    private VariantResponse mapToVariantResponse(Variant variant) {
        return new VariantResponse(
                variant.getId(),
                variant.getImages(),
                variant.getMrpPrice(),
                variant.getSellingPrice(),
                variant.getDiscount(),
                variant.getStock(),
                variant.getColor(),
                variant.getSize(),
                variant.getSpecifications(),
                variant.getKeyFeatures()
        );
    }
}
