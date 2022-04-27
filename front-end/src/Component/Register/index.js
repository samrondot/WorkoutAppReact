import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function sendRegisterRequest(){
        const reqBody = {
        "username" : username,
        "password" : password,
      }
         fetch("/api/auth/register", {
        headers: {
          "Content-Type" : "application/json",
        },
        method : "POST",
        body :  JSON.stringify(reqBody)
      }).then ((message) => message.json)
      .then((data) => console.log(data))
    }
    return (
        <div>
            <label htmlFor='username'>Username</label>
            <input type='email' id = 'username' value={username} onChange= {(e)=> setUsername(e.target.value)}/>
            <label htmlFor='password'>Password</label>
            <input type='password' id = 'password' value={password}onChange= {(e)=> setPassword(e.target.value)}/>
            <button id='submit' type='button' onClick={(e) => sendRegisterRequest()}>Submit</button>
        </div>  
    );
};

export default Register;