import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from "./GameList";
import GameAdd from "./GameAdd";


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path='/games' exact={true} element={<GameList/>}/>
            <Route path='/games/:id' element={<GameAdd/>}/>
        </Routes>
    </Router>
  )
}

export default App;
