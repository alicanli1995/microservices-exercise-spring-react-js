package com.example.purchaseservice.controller;


import com.example.purchaseservice.model.Purchase;
import com.example.purchaseservice.service.PurchaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;

@RestController
@CrossOrigin
@RequestScope
@RequiredArgsConstructor
@RequestMapping("/api/purchase")
public class PurchaseController {

    private final PurchaseService purchaseService;

    @PostMapping
    public ResponseEntity<Purchase> savePurchase(@RequestBody Purchase purchase){
        return new ResponseEntity(purchaseService.savePurchase(purchase), HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Purchase>> getAllPurchaseById(@PathVariable Long userId){
        return ResponseEntity.ok(purchaseService.findAllPurchases(userId));
    }
}
