package com.example.shelfy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.util.*;

@Getter
@Setter
@AllArgsConstructor
public class VariantResponse {
    private Long id;
    private List<String> images = new ArrayList<>();
    private Long mrpPrice;
    private Long sellingPrice;
    private Double discount;
    private Long stock;
    private String color;
    private String size;
    private Map<String, String> specifications = new HashMap<>();
    private Set<String> keyFeatures = new HashSet<>();
}
