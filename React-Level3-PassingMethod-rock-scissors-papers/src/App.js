import React, { Component } from 'react';
import './App.css';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor() {
    super();
    this.signs = ['rock', 'scissors', 'paper'];
    this.state = {
      playerOne: 'rock',
      playerTwo: 'scissors',
      winner: 'Press the button'
    };
  }

  random = () => {
    let random1 = Math.floor(Math.random() * 3);
    let card1 = this.signs[random1];
    let random2 = Math.floor(Math.random() * 3);
    let card2 = this.signs[random2];
    this.setState(
      {
        playerOne: card1,
        playerTwo: card2
      },
      this.decideWinner
    );
  };

  decideWinner = () => {
    let playerOne = this.state.playerOne;
    let playerTwo = this.state.playerTwo;
    if (
      (playerOne === 'rock' && playerTwo === 'scissors') ||
      (playerOne === 'paper' && playerTwo === 'rock') ||
      (playerOne === 'scissors' && playerTwo === 'paper')
    ) {
      this.setState({ winner: 'playerOne wins' });
    }
    if (
      (playerTwo === 'rock' && playerOne === 'scissors') ||
      (playerTwo === 'paper' && playerOne === 'rock') ||
      (playerTwo === 'scissors' && playerOne === 'paper')
    ) {
      this.setState({ winner: 'playerOne wins' });
    }
    if (playerOne === playerTwo) {
      this.setState({ winner: 'Tie' });
    }
  };

  render() {
    const { playerOne, playerTwo } = this.state;
    
    return (
      <div className="content-container">
        <div className="card-container">
          <PlayerCard sign={playerOne} />
          <PlayerCard sign={playerTwo} />
        </div>
        <div>
          <div className="winner">{this.state.winner}</div>
          <button type="button" onClick={this.random}>
            Play the Game
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
