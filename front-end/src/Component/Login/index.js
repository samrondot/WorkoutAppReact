import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocalState } from '../../Util/useLocalStorage';
import Register from '../Register';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [jwt, setJwt] = useLocalState("", "jwt")
    console.log(username);
    function sendLoginRequest(){
            const reqBody = {
            "username" : username,
            "password" : password,
          }
        
             fetch("/api/auth/login", {
            headers: {
              "Content-Type" : "application/json",
            },
            method : "POST",
            body :  JSON.stringify(reqBody)
          })
          .then((response) => {
          if(response.status === 200)
         return Promise.all([response.json(), response.headers])
          else return Promise.reject("Invalid Login Attempt")
          
                })
          .then(([body, headers]) => {
            setJwt(headers.get("authorization"))
            localStorage.setItem("user", JSON.stringify(body))
            alert("hello", body)
            
            window.location = "/workout";
          }).catch((message) => {alert(message)})
        }
            
          
        console.log("Username is ", username)
    
    return (
        <>
          <h1>Welcome to WorkoutApp</h1>
          <div>
              <label htmlFor='username'>Username</label>
              <input type='email' id = 'username' value={username} onChange= {(e)=> setUsername(e.target.value)}/>
              <label htmlFor='password'>Password</label>
              <input type='password' id = 'password' value={password}onChange= {(e)=> setPassword(e.target.value)}/>
              <button id='submit' type='button' onClick={(e) => sendLoginRequest()}>Submit</button>
              <Link to="/register" component={Register}>Register</Link> 
          </div>
          </>  
    );
};
export default Login;