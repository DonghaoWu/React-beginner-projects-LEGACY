### `This app is about how to handle more complicate class properties(interact between different properties in class component), also add some methods in class component.`

#### `(Chinese)本应用最重要的一点是setState是一个异步函数，我们不能在setState后运行任何基于state变化后的函数和运算，如果一定要这样运行，setState其实是一个双参数的函数，你可以把回调函数放在第二参数位置，这样就可以达到同步运行。详细可参考this.decideWinner的运行位置。`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `control + c`

Quit the development mode.

### 1. What can you do in every class component section?(basic format for defining a class component)

```jsx
import React, { Component } from 'react';

class Game extends Component {
  constructor() {
    //JavaScript only.
    //super() is a must.
    super();
    //this.state is a must, you could also define other class properties here
    this.state = {};
  }

  /*
  JavaScript & JSX are available.
  define your class component methods here
  usually it is recommended to define in arrow way
  */

  //render(){} is a must.
  render() {
    //JavaScript only.
    //return() is a must.
    return (
      //It is a must to wrap everything into only one div
      <div>JSX is Available here.</div>
    );
  }
}
//Don't forget this!
export default Game;
```

#### `note:`

<ol><li>Check your format if you get error.</li>
<li>Cheat sheet:React Snippets - Visual Studio ---- rcc/rce.</li>
</ol>

### 2. Declare a random method in class component

```jsx
//This is how constructor looks like.
// constructor() {
//   super();
//   this.signs = ["rock", "scissors", "paper"];
//   this.state = {
//     playerOne: "rock",
//     playerTwo: "scissors",
//     winner: "Press the button"
//   };
// }
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
```

#### `note:`

<ol>
<li>this.setState has two arguments, one is new state value, one is a callback function.</li>
<li>Because this.setState is a async function, it will be fired then re-render the dom.</li>
</ol>

#### `If you want to invoke some functions after the state updated and right before re-render, you could put the functions as setState callback argument. As the code above.`

### 3. Render section code

```jsx
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
        <button
          type="button"
          onClick={this.random}>
        Play the Game
        </button>
      </div>
    </div>
  );
}
```

#### `note: logic of render code`

<ol>
<li>Click on the button, fire random function, update the state, fire decideWinner function before re-render.</li>
<li>In decideWinner function, update the state again.</li>
<li>Re-render the dom, pass the updated state to child component PlayerCard, and populate the {this.state.winner}.</li>
</ol>

### 4. In PlayerCard component, change the image according to the props passed from parent component. <br>

#### (similar to [React-Level2-props-selector](https://github.com/DonghaoWu/React-Level2-props-selector)).

```jsx
import React from 'react';
const scissors = 'https://i.imgur.com/pgjyhIZ.png';
const rock = 'https://i.imgur.com/LghSkIw.png';
const paper = 'https://i.imgur.com/2gsdqvR.png';

const PlayerCard = props => {
  const { sign } = props;
  let image = '';
  if (sign === 'rock') image = rock;
  if (sign === 'paper') image = paper;
  if (sign === 'scissors') image = scissors;
  return (
    <div className="player-card">
      <img src={image} />
    </div>
  );
};

export default PlayerCard;
```

#### `note:`

<ol><li>This is a good example about defining a functional component.</li></ol>

### 5. Define a JSX method and invoke it in render section.

```jsx
import React, { Component } from 'react';

class Game extends Component {
  constructor() {
    super();
    this.state = {};
  }

  test = () => {
    return <div>hello</div>;
  };

  render() {
    return <div>{this.test()}</div>;
  }
}
```

### 6. Side notes

#### `In this app, the most important points are`

<ol>
<li>this.setState is a async function, it has two arguments</li>
<li>Check your format before you debug.</li>
<li>class method can be written in JSX and acts as a component.</li>
</ol>
