package com.sha.project.service;

import com.sha.project.model.Course;

import java.util.List;

public interface CourseService {
    Course saveCourse(Course course);
    void deleteCourse(Long id);
    List<Course> findAllCourses();
}
