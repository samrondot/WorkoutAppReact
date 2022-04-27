import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import WorkoutApp from './Component/WorkoutApp';
import Login from './Component/Login';
import Register from './Component/Register';
import Add from './Component/Add';
import Leaderboard from './Component/Leaderboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path = "/" element = {<Login />}/>
       <Route path='/workout' element = {<WorkoutApp/>}></Route>
       <Route path='/register' element = {<Register/>}></Route>
       <Route path='/add' element = {<Add/>}></Route>
       <Route path='/leaderboard' element = {<Leaderboard/>}></Route>
       
    </Routes>


    </BrowserRouter>
    
  );
}

export default App;
