
package com.example.shelfy.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BecomeSellerRequest {
    @NotBlank(message = "Business name cannot be blank")
    @Size(max = 100, message = "Business name cannot exceed 100 characters")
    private String businessName;

    @NotBlank(message = "Business email cannot be blank")
    @Email(message = "Please provide a valid email address")
    @Size(max = 150, message = "Email cannot exceed 150 characters")
    private String businessEmail;

    @NotNull(message = "Business phone number cannot be null")
    private Long businessPhoneNumber;

    @NotBlank(message = "Business address cannot be blank")
    private String businessAddress;

    private String businessLogo;

    private String banner;

    @NotNull(message = "Account number cannot be null")
    private Long accountNumber;

    @NotBlank(message = "Account holder name cannot be blank")
    @Size(max = 100, message = "Account holder name cannot exceed 100 characters")
    private String accountHolderName;

    @NotBlank(message = "IFSC Code cannot be blank")
    @Size(max = 20, message = "IFSC Code cannot exceed 20 characters")
    private String ifscCode;

    @NotBlank(message = "GSTIN cannot be blank")
    private String gstin;

    // Pickup Address Details

    @NotBlank(message = "Pickup address name cannot be blank")
    @Size(max = 100, message = "Pickup address name cannot exceed 100 characters")
    private String pickupAddressName;

    @NotBlank(message = "Pickup phone number cannot be blank")
    @Size(min = 10, max = 10, message = "Pickup phone number must be exactly 10 digits")
    private String pickupPhoneNumber;

    @NotBlank(message = "Pickup pin code cannot be blank")
    private String pickupPinCode;

    @NotBlank(message = "Pickup address cannot be blank")
    @Size(max = 150, message = "Pickup address cannot exceed 150 characters")
    private String pickupAddress;

    @NotBlank(message = "Pickup locality cannot be blank")
    @Size(max = 100, message = "Pickup locality cannot exceed 100 characters")
    private String pickupLocality;

    @NotBlank(message = "Pickup city cannot be blank")
    @Size(max = 100, message = "Pickup city cannot exceed 100 characters")
    private String pickupCity;

    @NotBlank(message = "Pickup state cannot be blank")
    @Size(max = 100, message = "Pickup state cannot exceed 100 characters")
    private String pickupState;
}
