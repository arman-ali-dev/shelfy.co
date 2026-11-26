package com.example.shelfy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CategoryResponse {
    private String name;
    private String description;
    private String image;
}
