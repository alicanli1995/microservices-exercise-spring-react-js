package com.sha.project.controller;


import com.sha.project.model.Course;
import com.sha.project.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;

@RestController
@CrossOrigin
@Validated
@RequestScope
@RequestMapping("/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @PostMapping
    public ResponseEntity<Course> saveCourse(@RequestBody @Validated Course course){
        return  ResponseEntity.ok(courseService.saveCourse(course));
    }

    @GetMapping
    public ResponseEntity<List<Course>> getCourseById(){
        return ResponseEntity.ok(courseService.findAllCourses());
    }


    @DeleteMapping("/{courseId}")
    public ResponseEntity<?> deleteCourseById(@PathVariable long courseId){
        courseService.deleteCourse(courseId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
