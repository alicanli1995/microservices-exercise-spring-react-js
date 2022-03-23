package com.example.gatewayservice.controller;

import com.example.gatewayservice.request.CourseServiceRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/gateway/course")
@RequiredArgsConstructor
@RequestScope
public class CourseController {

    private final CourseServiceRequest courseServiceRequest;

    @PostMapping
    public ResponseEntity<?> saveCourse(@RequestBody Object course){
        return new ResponseEntity<>(courseServiceRequest.saveCourse(course), HttpStatus.CREATED);
    }

    @DeleteMapping("/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable("courseId") Long courseId){
         courseServiceRequest.deleteCourse(courseId);
         return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Object>> getAllCourses(){
        return ResponseEntity.ok(courseServiceRequest.getAllCourses());
    }


}
