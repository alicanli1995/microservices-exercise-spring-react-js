package com.sha.project.service.impl;

import com.sha.project.model.Course;
import com.sha.project.repository.CourseRepository;
import com.sha.project.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    @Override
    public Course saveCourse(Course course){
        course.setCreateTime(LocalDateTime.now());
        return courseRepository.save(course);
    }

    @Override
    public void deleteCourse(Long id){
        courseRepository.deleteById(id);
    }

    @Override
    public List<Course> findAllCourses(){
        return courseRepository.findAll();
    }

}
