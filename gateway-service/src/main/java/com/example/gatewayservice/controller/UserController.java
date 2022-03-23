package com.example.gatewayservice.controller;


import com.example.gatewayservice.model.Role;
import com.example.gatewayservice.security.UserPrincipal;
import com.example.gatewayservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

@RestController
@CrossOrigin
@RequestScope
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @PutMapping("/change/{role}")
    public ResponseEntity<?> changeRoleUser(@AuthenticationPrincipal UserPrincipal userPrincipal,
                                            @PathVariable Role role){
        userService.changeRoleUser(role,userPrincipal.getUsername());
        return ResponseEntity.ok(true);
    }

}
