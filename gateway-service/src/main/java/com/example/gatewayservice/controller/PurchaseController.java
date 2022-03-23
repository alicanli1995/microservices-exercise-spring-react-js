package com.example.gatewayservice.controller;


import com.example.gatewayservice.request.PurchaseServiceRequest;
import com.example.gatewayservice.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/gateway/purchase")
@RequiredArgsConstructor
@RequestScope
public class PurchaseController {

    private final PurchaseServiceRequest purchaseServiceRequest;


    @PostMapping
    public ResponseEntity<Object> savePurchase(@RequestBody Object purchase){
        return new ResponseEntity(purchaseServiceRequest.savePurchase(purchase), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Object>> getAllPurchaseById(@AuthenticationPrincipal UserPrincipal userPrincipal){
        return ResponseEntity.ok(purchaseServiceRequest.getAllPurchaseById(userPrincipal.getId()));
    }


}
