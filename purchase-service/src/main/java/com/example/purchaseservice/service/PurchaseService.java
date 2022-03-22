package com.example.purchaseservice.service;

import com.example.purchaseservice.model.Purchase;

import java.util.List;

public interface PurchaseService {
    Purchase savePurchase(Purchase purchase);

    List<Purchase> findAllPurchases(Long userId);
}
