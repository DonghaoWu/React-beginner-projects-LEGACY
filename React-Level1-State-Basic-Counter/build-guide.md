## How to create a React app?

### Step1: Local

```bash
npx create-react-app yourAppName
cd yourAppName
npm start
```

### Step2: Github

```bash
cd yourAppName
git init
git add .
git commit -m 'first commit'
git remote add origin yourGithubURL
git push -u origin master
```

### Step3: Code Guide

#### 1.Basic format ===> location: ./src/App.js

```js
import React, { Component } from "react";

//class definition
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div />;
  }
}

export default App;
```

#### 2.Add state, html and css ===> location: ./src/App.js

```js
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0 //add an initialization state
    };
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button">Increment</button>
          <button type="button">Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
```

#### 3.Add class method ===> location: ./src/App.js

```js
import React, { Component } from "react";

//class definition
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0 //add an initialization state
    };
  }

//define method in arrow function way.
  increment = () =>{
    this.setState({
      count:this.state.count + 1;
    })
  }

  decrement = () =>{
    this.setState({
      count:this.state.count - 1;
    })
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick = {this.increment}>Increment</button>
          <button type="button" onClick = {this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
```
