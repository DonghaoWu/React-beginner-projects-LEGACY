### 1.About JSX

- How does it look like?

```js
const helloWorld = () => {
  return <h1>Hello World</h1>;
};

<div className="container" />;
```

### 2.Some comments

- This allows us to focus on building components, not templates.

- This also allows us to reduce context switching by combining markup and JavaScript.

- In the end JSX complied down to basic JavaScript via the bable complier.

### 3.About Component

- Functional components(stateless)

```js
import React from "react";

const Hello = props => {
  return <h1>Hello {props.name}</h1>;
};

export default Hello;
```

- Class Component(stateful)

```js
import React, {Component} from "react";

class App extends Component{
  constructor{
    super();
    this.state = {
      name: 'React'
    }
  }

  render(){
    const {name} = this.state;
    return(
      <div>
          <h1>Hello {name}</h1>;
      </div>
    );
  }
}

export default App;
```

### 4.About State

- State is always an object with key value pairs.
- State is always initialized in the constructor.
- When you update 'state', React **_re-render_** the view for you.
