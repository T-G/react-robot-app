import React, { useState, useEffect } from 'react'
import Scroll  from '../components/Scroll';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary'
//import { robots } from './robots';
import './App.css';

function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    },[]);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
        
    return ( !robots.length ) ?
    <h1 className="f3 tc">Loading...</h1> :
    
    (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <Searchbox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;