import React from 'react';

const Leaderboard = () => {
    function getAll(){
            fetch ('/api/auth/getAll')
            .then((response) => response.json())
            .then((data) => console.log(data))
        }
    return (
       
        <div>
         
        </div>
    );
};

export default Leaderboard;