package com.example.gatewayservice.request;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(value = "course-service",
             path = "/api/course",
//             url = "${course.service.url}",
             configuration = FeignConfig.class)

public interface CourseServiceRequest {

    @PostMapping
    Object saveCourse(@RequestBody Object request);

    @DeleteMapping("{courseId}")
    void deleteCourse(@PathVariable("courseId") Long courseId);

    @GetMapping
    List<Object> getAllCourses();

}
