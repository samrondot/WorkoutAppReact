import React from 'react';

function logout (){
  localStorage.clear()
  window.location.href='/'
}

const Header = () => {
    return (
        <> 
        <div>
          <nav className="navbar navbar-light bg-light">
           <div className="container-fluid">
            <a className="navbar-brand" href="#">Workout App</a>
            <button type="button" className="btn btn-outline-danger" onClick={(e) => logout()}>Logout</button>
       </div>
</nav>
                
        </div></>
    );
};

export default Header;