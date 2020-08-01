This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
#### `(Chinese)本应用的用途在于介绍state与render，tenery，passing props还有setState的用法。`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```jsx
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
```

### `note:`

- Define a class function in arrow way.
- Invoke a class function in `{this.functionName}` way.
- Grab the valiable from parent component in `destructuring` way.
