import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster:[],
      searchField:'',
    };

   // this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monster:users}));
  }

  handleChange = e => {
    this.setState({searchField:e.target.value});
  }

  render(){
    //destructuring
    const { monster , searchField} = this.state;
    //using filter and include
    const filteredMonster = monster.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className='App'>
     <h1>Monsters Rolodex</h1>
     <SearchBox 
        placeholder='search monster'
        handleChange={this.handleChange} />
      <CardList monster = {filteredMonster}/>
      </div>
      )
  }

}

export default App;
