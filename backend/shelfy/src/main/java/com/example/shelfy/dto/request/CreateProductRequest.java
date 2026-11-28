package com.example.shelfy.dto.request;

import com.example.shelfy.entity.Variant;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CreateProductRequest {
    @NotBlank(message = "Name cannot be blank")
    @Size(max = 150, message = "Name cannot exceed 150 characters")
    private String name;

    @NotBlank(message = "Description cannot be blank")
    private String description;

    @NotNull(message = "Category is required")
    private Long categoryId;

    @NotEmpty(message = "At least one variant is required")
    @Valid
    private List<CreateVariantRequest> variants;

    private boolean isBestSeller;
}
