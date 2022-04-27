package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Workout {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long workoutId;
	private String workoutType;
	private Integer caloriesBurned;
	private Integer lengthOfRun;
	@ManyToOne
	private User user;

	public Long getWorkoutId() {
		return workoutId;
	}
	public void setWorkoutId(Long workoutId) {
		this.workoutId = workoutId;
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
	@JoinColumn(name = "user_id")
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
}
