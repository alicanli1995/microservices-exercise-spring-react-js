package com.example.gatewayservice.security;

import com.example.gatewayservice.security.utils.SecurityUtils;
import com.example.gatewayservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var user = userService.findByUsername(username).
                orElseThrow(() -> new UsernameNotFoundException("User not found in database..." + username));
        Set<GrantedAuthority> authoritySet = Set.of(SecurityUtils.convertToAuthority(user.getRole().name()));
        return UserPrincipal.builder()
                .user(user)
                .username(username)
                . id(user.getId())
                .password(user.getPassword())
                .authorities(authoritySet)
                .build();
    }
}
