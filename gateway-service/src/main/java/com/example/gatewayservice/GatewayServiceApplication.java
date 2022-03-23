package com.example.gatewayservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class GatewayServiceApplication {


    public static void main(String[] args) {
        SpringApplication.run(GatewayServiceApplication.class, args);
    }

}
