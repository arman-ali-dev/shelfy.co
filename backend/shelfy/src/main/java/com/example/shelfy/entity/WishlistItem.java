package com.example.shelfy.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "wishlist_items")
@Getter
@Setter
public class WishlistItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "wishlist_id")
    private Wishlist wishlist;

    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id")
    private Variant product;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof WishlistItem other)) return false;
        return id != null && id.equals(other.getId());
    }

    @Override
    public int hashCode() {
        return WishlistItem.class.hashCode();
    }
}
