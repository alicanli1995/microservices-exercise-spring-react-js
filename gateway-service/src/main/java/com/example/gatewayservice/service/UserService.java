package com.example.gatewayservice.service;

import com.example.gatewayservice.model.Role;
import com.example.gatewayservice.model.User;

import java.util.Optional;

public interface UserService {
    User saveUser(User user);

    Optional<User> findByUsername(String username);

    void changeRoleUser(Role role, String username);
}
