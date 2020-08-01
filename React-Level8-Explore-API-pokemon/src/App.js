import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      firstData: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`
    );
    const data = await res.json();

    this.setState({
      firstData: data.results,
      isLoaded: true
    });
  }
  render() {
    const { firstData, isLoaded } = this.state;
    console.log(firstData);
    return isLoaded ? (
      <div className="container">
        {firstData.map(el => {
          return <PokemonCard key={el.name} name={el.name} url={el.url} />;
        })}
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default App;
