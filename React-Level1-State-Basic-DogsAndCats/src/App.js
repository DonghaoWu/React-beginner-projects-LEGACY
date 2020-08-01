import React, { Component } from 'react';
import cats from './cats.js';
import dogs from './dogs.js';
import List from './List.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trueForDogsAndFalseForCats: true
    };
    // this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      anitrueForDogsAndFalseForCats: !this.state.trueForDogsAndFalseForCats
    });
  };
  render() {
    const animals = this.state.trueForDogsAndFalseForCats ? dogs : cats;
    return (
      <div>
        <button onClick={this.toggle}>toggle</button>
        <ul>
          {animals.map(animal => (
            <List key={animal.id} animal={animal} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
