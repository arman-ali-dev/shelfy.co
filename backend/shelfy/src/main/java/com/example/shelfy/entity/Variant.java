package com.example.shelfy.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.*;

@Entity
@Table(name = "variants")
@Getter
@Setter
public class Variant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id")
    private Product product;

    @ElementCollection
    private List<String> images = new ArrayList<>();

    @Column(nullable = false)
    private Long mrpPrice;

    @Column(nullable = false)
    private Long sellingPrice;

    @Column(nullable = false)
    @DecimalMin("0.0")
    @DecimalMax("100.0")
    private Double discount;

    @Column(nullable = false)
    private Long stock;

    @Column(nullable = false, length = 50)
    private String color;

    @Column(nullable = false, length = 50)
    private String size;

    @ElementCollection
    private Map<String, String> specifications = new HashMap<>();

    @ElementCollection
    private Set<String> keyFeatures = new HashSet<>();

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Variant other)) return false;
        return id != null && id.equals(other.getId());
    }

    @Override
    public int hashCode() {
        return Variant.class.hashCode();
    }
}
