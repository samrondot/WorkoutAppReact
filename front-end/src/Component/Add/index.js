import React, { useState } from 'react';
import Header from '../Header';

const Add = () => {
    const [workoutType, setWorkoutType] = useState("")
    const [caloriesBurned, setCaloriesBurned] = useState("")
    const [lengthOfRun, setLengthOfRun] = useState("")
   let o = JSON.parse(localStorage.getItem("user"))
    console.log(o.userId)
    function submitWorkoutForm ()  {
        const reqBody = {
            "id" : o.userId,
        "caloriesBurned" :caloriesBurned,
            "lengthOfRun" : lengthOfRun,
            "workoutType" : workoutType,
            
        }
        fetch('/api/auth/workout/', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(reqBody)
        }).then((response) => response.json)
            .then((data) => console.log(data))

    }

    return (
        <>
        <Header />
        <div>
        <div>
            <label htmlFor='type'>Workout Type</label>
            <input type='text' value = {workoutType} onChange={(e) => setWorkoutType(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor='calories' >Calories Burned</label>
            <input type = 'text' value = {caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor='length' >Length Of Run</label>
            <input type = 'text' value = {lengthOfRun} onChange={(e) => setLengthOfRun(e.target.value)}></input>
        </div>
        <button type='button' id='submit' onClick={(e) => submitWorkoutForm()} >Submit</button>
        </div>
        
        </>
    );
};

export default Add;