import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import '../assets/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_URL_API)
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
      <h1>Loading...</h1> :
      (<div className="App">
        <h1 className="app-title">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>

        <CardList robots={filteredRobots} />
        </Scroll>
        <footer className="footer">Made by <a href='https://github.com/YanaYur' target="_blank" rel="noopener noreferrer"> Yana </a></footer>
      </div>)
  }
}

export default App;