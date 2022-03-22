package com.example.purchaseservice.repository;

import com.example.purchaseservice.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase,Long> {

    List<Purchase> findAllByUserId(Long userId);
}
