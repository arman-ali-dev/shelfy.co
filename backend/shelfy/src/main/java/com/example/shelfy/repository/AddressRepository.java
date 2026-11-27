package com.example.shelfy.repository;

import com.example.shelfy.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Long> {
    List<Address> findAllByOrderByCreatedAtDesc();
}
