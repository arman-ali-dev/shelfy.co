package com.example.shelfy.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateCategoryRequest {
    @NotBlank(message = "Name cannot be blank")
    @Size(max = 100, message = "Full name cannot exceed 100 characters")
    private String name;

    @NotBlank(message = "Description cannot be blank")
    private String description;

    @NotBlank(message = "Image is required")
    private String image;

    @NotNull(message = "Parent category is required")
    private Long parentCategoryId;
}
