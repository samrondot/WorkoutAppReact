import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Testing from '../Test';

const WorkoutApp = () => {
    let o = JSON.parse(localStorage.getItem("user"))
    if(localStorage.getItem('user')=== null){
        window.location = "/";
    }else{
        console.log("Clear");
    }
    return (
        <>        
        <Header />
                    <h1>Helo there {o.username}</h1>
        <Testing name = "Sam"/>
        <button type="button" className="btn btn-secondary" style={ {backgroundColor: 'blue',  color : 'white' }}onClick={(e) => {
                e.preventDefault();
      window.location.href='/add';
      }}>Add Workout</button>
        

        <Footer />
        </>
    );
};

export default WorkoutApp;