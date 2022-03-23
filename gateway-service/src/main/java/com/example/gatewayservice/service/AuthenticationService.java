package com.example.gatewayservice.service;

import com.example.gatewayservice.model.User;

public interface AuthenticationService {
    User signInAndReturnJWT(User signInRequest);
}
