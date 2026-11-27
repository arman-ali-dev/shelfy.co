package com.example.shelfy.controller.customer;

import com.example.shelfy.dto.request.CreateAddressRequest;
import com.example.shelfy.dto.request.UpdateAddressRequest;
import com.example.shelfy.dto.response.AddressResponse;
import com.example.shelfy.repository.AddressRepository;
import com.example.shelfy.service.AddressService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/addresses")
@RequiredArgsConstructor
public class AddressController {

    private final AddressService addressService;

    @PostMapping
    public ResponseEntity<AddressResponse> createAddressHandler(
            @RequestBody @Valid CreateAddressRequest request) {
        AddressResponse response = addressService.createAddress(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddressResponse> getAddressHandler(@PathVariable Long id) {
        AddressResponse response = addressService.getAddress(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all")
    public ResponseEntity<List<AddressResponse>> getAllAddressesHandler() {
        List<AddressResponse> response = addressService.getAllAddresses();
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddressResponse> updateAddressHandler(
            @PathVariable Long id, @RequestBody @Valid UpdateAddressRequest request) {
        AddressResponse response = addressService.updateAddress(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> updateAddressHandler(@PathVariable Long id) {
        addressService.deleteAddress(id);
        return ResponseEntity.noContent().build();
    }
}
