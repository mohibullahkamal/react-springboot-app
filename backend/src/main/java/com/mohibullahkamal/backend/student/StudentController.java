package com.mohibullahkamal.backend.student;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("students")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents() {
        return List.of(
                new Student(UUID.randomUUID(), "Mohibullah", "Kam", "mo@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(), "Imon", "Bay", "imon@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(), "Mamun", "Al", "mamun@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(), "Anja", "Brown", "anja@gmail.com", Student.Gender.FEMALE)




        new Student(UUID.randomUUID(), "Mohibullah", "Kam", "mo@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(), "Imon", "Bay", "imon@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(), "Mamun", "Al", "mamun@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(), "Anja", "Brown", "anja@gmail.com", Student.Gender.FEMALE)
        );
    }
}
