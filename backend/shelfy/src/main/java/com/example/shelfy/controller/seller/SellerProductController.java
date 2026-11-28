package com.example.shelfy.controller.seller;

import com.example.shelfy.dto.request.CreateProductRequest;
import com.example.shelfy.dto.request.UpdateProductRequest;
import com.example.shelfy.dto.response.ProductResponse;
import com.example.shelfy.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/seller/products")
@RequiredArgsConstructor
public class SellerProductController {

    private final ProductService productService;

    @PostMapping
    public ResponseEntity<ProductResponse> createProductHandler(
            @RequestBody @Valid CreateProductRequest request) {
        ProductResponse response = productService.createProduct(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductResponse> updateProductHandler(@PathVariable Long id,
                                                          @RequestBody @Valid UpdateProductRequest request) {
        ProductResponse response = productService.updateProduct(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ProductResponse> deleteProductHandler(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
}
