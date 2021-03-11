import React, {Component} from 'react'
import Scroll  from '../components/Scroll';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
//import { robots } from './robots';
import './App.css';

class App extends Component {
    
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
       // console.log('constructor call');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
       // console.log('componentDidMount call');
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

        }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
            return ( !robots.length ) ?
                <h1 className="f3 tc">Loading...</h1> :
            
            //console.log('render call');
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
}

export default App;