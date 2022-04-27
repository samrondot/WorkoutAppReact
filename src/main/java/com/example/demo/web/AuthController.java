package com.example.demo.web;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.User;
import com.example.demo.domain.Workout;
import com.example.demo.dto.AuthCredentialsRequest;
import com.example.demo.dto.UserDto;
import com.example.demo.dto.WorkoutDto;
import com.example.demo.service.UserService;
import com.example.demo.service.WorkoutService;
import com.example.demo.util.JwtUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;     
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private WorkoutService workoutService;
    
    @PostMapping("login")
    public ResponseEntity<?> login (@RequestBody AuthCredentialsRequest request) {
        try {
            Authentication authenticate = authenticationManager
                .authenticate(
                    new UsernamePasswordAuthenticationToken(
                        request.getUsername(), request.getPassword()
                    )
                );
            User user = (User) authenticate.getPrincipal();
            user.setPassword(null);
            return ResponseEntity.ok()
                .header(
                    HttpHeaders.AUTHORIZATION,
                    jwtUtil.generateToken(user)
                )
                .body(user);
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }	
    @PostMapping("/register")
    public ResponseEntity<?> register (@RequestBody UserDto userDto){
    	return ResponseEntity.ok(userService.createUser(userDto));
    	
		
    }
    
    @PostMapping("/workout")
    public ResponseEntity<?> submitWorkout (@RequestBody WorkoutDto workout) {
    	workoutService.createWorkout(workout);
    	return ResponseEntity.ok("hello");
    	//workoutService.createWorkout(workout);
    }
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllWorkouts(){
    	return ResponseEntity.ok(workoutService.getAll());
    }

}