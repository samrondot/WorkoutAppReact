import React from 'react';
import './footer.css'

const Footer = () => {
    return (
    <div className= 'footer'>
        <nav class="navbar navbar-light bg-light" >
        <span class="navbar-brand mb-0 h1"> &copy; WorkoutApp {new Date().getFullYear()}</span>
        </nav>     
    </div>
    
    )
}

export default Footer;