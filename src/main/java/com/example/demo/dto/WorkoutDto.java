package com.example.demo.dto;

public class WorkoutDto {
	private Long id;
	private Integer caloriesBurned;
	private Integer lengthOfRun;
	private String workoutType;

	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getWorkoutType() {
		return workoutType;
	}
	public void setWorkoutType(String workoutType) {
		this.workoutType = workoutType;
	}
	public Integer getCaloriesBurned() {
		return caloriesBurned;
	}
	public void setCaloriesBurned(Integer caloriesBurned) {
		this.caloriesBurned = caloriesBurned;
	}
	public Integer getLengthOfRun() {
		return lengthOfRun;
	}
	public void setLengthOfRun(Integer lengthOfRun) {
		this.lengthOfRun = lengthOfRun;
	}
}
