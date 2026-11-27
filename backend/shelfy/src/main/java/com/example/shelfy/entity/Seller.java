package com.example.shelfy.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "sellers")
@Getter
@Setter
@NoArgsConstructor
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false, length = 100)
    private String businessName;

    @Column(nullable = false, length = 150, unique = true)
    private String businessEmail;

    @Column(nullable = false, unique = true)
    private Long businessMobileNumber;

    @Column(nullable = false)
    private String businessAddress;

    private String businessLogo;

    private String banner;

    @Column(nullable = false)
    private Long accountNumber;

    @Column(nullable = false, length = 100)
    private String accountHolderName;

    @Column(nullable = false, length = 20)
    private String ifscCode;

    @OneToOne(optional = false)
    @JoinColumn(name = "pickup_address_id")
    private Address pickupAddress;

    @Column(nullable = false)
    private String gstin;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(nullable = false)
    private LocalDateTime updatedAt;

    public Seller(User user,
                  String businessName,
                  String businessEmail,
                  Long businessMobileNumber,
                  String businessAddress,
                  String businessLogo,
                  String banner,
                  Long accountNumber,
                  String accountHolderName,
                  String ifscCode,
                  Address pickupAddress,
                  String gstin) {
        this.user = user;
        this.businessName = businessName;
        this.businessEmail = businessEmail;
        this.businessMobileNumber = businessMobileNumber;
        this.businessAddress = businessAddress;
        this.businessLogo = businessLogo;
        this.banner = banner;
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.ifscCode = ifscCode;
        this.pickupAddress = pickupAddress;
        this.gstin = gstin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Seller other)) return false;
        return id != null && id.equals(other.getId());
    }

    @Override
    public int hashCode() {
        return Seller.class.hashCode();
    }
}
