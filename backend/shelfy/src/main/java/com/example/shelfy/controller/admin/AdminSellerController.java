package com.example.shelfy.controller.admin;

import com.example.shelfy.dto.response.SellerResponse;
import com.example.shelfy.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/sellers")
@RequiredArgsConstructor
public class AdminSellerController {

    private final SellerService sellerService;

    @DeleteMapping("/{sellerId}")
    public ResponseEntity<Void> deleteSellerHandler(@PathVariable Long sellerId) {
        sellerService.deleteSeller(sellerId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/all")
    public ResponseEntity<List<SellerResponse>> getAllSellersHandler() {
        List<SellerResponse> response = sellerService.getAllSellers();
        return ResponseEntity.ok(response);
    }



}
