package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.User;
import com.example.demo.domain.Workout;
import com.example.demo.dto.WorkoutDto;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.WorkoutRepository;

@Service
public class WorkoutService {
	
	@Autowired
	private WorkoutRepository workoutRepo;
	
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepo;

	public void createWorkout(WorkoutDto workout) {
		User user = userService.findByUserId(workout.getId());
		Workout workouts = new Workout();
		workouts.setLengthOfRun(workout.getLengthOfRun());
		workouts.setWorkoutType(workout.getWorkoutType());
		workouts.setUser(user);
		userRepo.save(user);
		workoutRepo.save(workouts);
		
	}

	public List<Workout> getAll() {
		return workoutRepo.findAll();
		
	}
	

}
