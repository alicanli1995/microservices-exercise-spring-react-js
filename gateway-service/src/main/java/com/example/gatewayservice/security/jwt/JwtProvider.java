package com.example.gatewayservice.security.jwt;

import com.example.gatewayservice.security.UserPrincipal;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;

public interface JwtProvider {
    String generateToken(UserPrincipal userPrincipal);

    boolean isTokenValid(HttpServletRequest request);

    Authentication getAuthentication(HttpServletRequest request);
}
