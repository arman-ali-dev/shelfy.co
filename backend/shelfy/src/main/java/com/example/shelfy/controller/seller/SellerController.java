package com.example.shelfy.controller.seller;

import com.example.shelfy.dto.request.BecomeSellerRequest;
import com.example.shelfy.dto.request.UpdateSellerProfileRequest;
import com.example.shelfy.dto.response.AuthResponse;
import com.example.shelfy.dto.response.SellerProfileResponse;
import com.example.shelfy.service.SellerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sellers")
@RequiredArgsConstructor
public class SellerController {

    private final SellerService sellerService;

    @PostMapping("/apply")
    public ResponseEntity<AuthResponse> becomeSellerHandler(@RequestBody @Valid BecomeSellerRequest request) {
        AuthResponse response = sellerService.becomeSeller(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<SellerProfileResponse> getProfileHandler(@PathVariable Long id) {
        SellerProfileResponse response = sellerService.getSellerProfile(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SellerProfileResponse> updateProfileHandler(
            @PathVariable Long id, @RequestBody @Valid UpdateSellerProfileRequest request) {
        SellerProfileResponse response = sellerService.updateSeller(id, request);
        return ResponseEntity.ok(response);
    }
}
