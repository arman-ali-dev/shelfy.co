package com.example.shelfy.controller.admin;

import com.example.shelfy.dto.response.ProductResponse;
import com.example.shelfy.dto.response.SellerResponse;
import com.example.shelfy.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
@RequiredArgsConstructor
public class AdminProductController {

    private final ProductService productService;

    @GetMapping("/seller/{sellerId}")
    public ResponseEntity<List<ProductResponse>> getAllProductsBySellerHandler(@PathVariable Long sellerId) {
        List<ProductResponse> response = productService.getProductsBySeller(sellerId);
        return ResponseEntity.ok(response);
    }

}
