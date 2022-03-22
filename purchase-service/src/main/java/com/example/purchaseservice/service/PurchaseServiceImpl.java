package com.example.purchaseservice.service;

import com.example.purchaseservice.model.Purchase;
import com.example.purchaseservice.repository.PurchaseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PurchaseServiceImpl implements PurchaseService{


    private final PurchaseRepository purchaseRepository;


    @Override
    public Purchase savePurchase(Purchase purchase){
        purchase.setPurchaseTime(LocalDateTime.now());
        return purchaseRepository.save(purchase);
    }

    @Override
    public List<Purchase> findAllPurchases(Long userId){
        return purchaseRepository.findAllByUserId(userId);
    }


}
