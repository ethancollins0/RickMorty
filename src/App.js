import React, { Component } from 'react';
import CharactersContainer from './components/CharactersContainer';
import SearchForm from './components/SearchForm'

const BASEURL = 'https://rickandmortyapi.com/api/'

export default class App extends Component {

  state = {
    characters: []
  }

  getChars = () => {
    fetch(BASEURL + 'character')
      .then(resp => resp.json())
      .then(response => response.results)
      .then(characters => this.setState({ characters }))
  }

  search = (input) => {
    fetch(BASEURL + `character?name=${input}`)
      .then(resp => resp.json())
      .then(response => response.results)
      .then(characters => this.setState({ characters }))
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.getChars}>Get All Characters</button>
        <SearchForm search={this.search}/>
        <CharactersContainer characters={this.state.characters}/>
      </div>
    );
  }
}