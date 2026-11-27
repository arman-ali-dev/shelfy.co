package com.example.shelfy.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateAddressRequest {
    @NotBlank(message = "Name cannot be blank")
    @Size(max = 100, message = "Name cannot exceed 100 characters")
    private String name;

    @NotBlank(message = "Phone No. cannot be blank")
    @Size(max = 10, message = "Phone No. cannot exceed 10 characters")
    private String phoneNumber;

    @NotBlank(message = "Pin Code cannot be blank")
    @Size(max = 50, message = "Pin code cannot exceed 50 characters")
    private String pinCode;

    @NotBlank(message = "Address cannot be blank")
    @Size(max = 150, message = "Address cannot exceed 150 characters")
    private String address;

    @NotBlank(message = "Locality cannot be blank")
    @Size(max = 100, message = "Locality cannot exceed 100 characters")
    private String locality;

    @NotBlank(message = "City cannot be blank")
    @Size(max = 100, message = "City cannot exceed 100 characters")
    private String city;

    @NotBlank(message = "State cannot be blank")
    @Size(max = 100, message = "State cannot exceed 100 characters")
    private String state;
}
