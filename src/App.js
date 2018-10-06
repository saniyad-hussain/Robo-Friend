import React, { Component } from 'react';
import RobotList from './RobotList';
import {robots} from './robots';
import SearchBox from './SearchBox';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			Searchfiled:''
		}
	}

	onSearchChange = (event) =>{
		this.setState({Searchfiled : event.target.value})
	}

	render(){
		const filterdRobots = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.Searchfiled.toLowerCase());
		})
		return(
		<div className = 'tc'>
			<h1>Robo Friends</h1>
			<SearchBox SearchChange = {this.onSearchChange}/>
			<RobotList robots = {filterdRobots}/>
		</div>	
	);
	}
}
export default App;