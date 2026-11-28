package com.example.shelfy.dto.request;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Getter
@Setter
public class CreateVariantRequest {
    @NotEmpty(message = "At least one image is required")
    private List<@NotBlank(message = "Image URL cannot be blank") String> images;

    @NotNull(message = "MRP price cannot be null")
    @Positive(message = "MRP price must be greater than zero")
    private Long mrpPrice;

    @NotNull(message = "Selling price cannot be null")
    @Positive(message = "Selling price must be greater than zero")
    private Long sellingPrice;

    @NotNull(message = "Discount cannot be null")
    @DecimalMin(value = "0.0", message = "Discount cannot be less than 0")
    @DecimalMax(value = "100.0", message = "Discount cannot exceed 100")
    private Double discount;

    @NotNull(message = "Stock cannot be null")
    @PositiveOrZero(message = "Stock cannot be negative")
    private Long stock;

    @NotBlank(message = "Color cannot be blank")
    @Size(max = 50, message = "Color cannot exceed 50 characters")
    private String color;

    @NotBlank(message = "Size cannot be blank")
    @Size(max = 50, message = "Size cannot exceed 50 characters")
    private String size;

    @NotEmpty(message = "At least one specification is required")
    private Map<
            @NotBlank(message = "Specification name cannot be blank") String,
            @NotBlank(message = "Specification value cannot be blank") String
            > specifications;

    @NotEmpty(message = "At least one key feature is required")
    private Set<
            @NotBlank(message = "Key feature cannot be blank") String
            > keyFeatures;
}
