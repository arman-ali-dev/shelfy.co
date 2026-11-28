package com.example.shelfy.dto.response;

import com.example.shelfy.entity.Variant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
public class ProductResponse {
    private Long id;
    private String name;
    private String description;
    private CategoryResponse category;
    private Set<VariantResponse> variants;
    private boolean isBestSeller;
}
