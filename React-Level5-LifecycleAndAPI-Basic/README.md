### `This app is about the basic concept about component lifecycle and fetch data from api.`

#### The main functionality of this program is to go out and grab some JSON data on the web and then format it to correctly be displayed to our specifications.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `control + c`

Quit the development mode.

### 1. The basic about using api.

#### A.`Create a stateful class component.`

- This will allow us to create state that we can update/use in our program to represent the data we collect from the API.

```jsx
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  render() {
    return <div />;
  }
}
```

#### `note:`

<ol><li>The reason why the items' data type should be a array is that we want to render all of them, and we will utilize Array built-in method `.map()` .</li></ol>

#### B.`To accomplish a API call we can use the lifecycle method componenDidMount().`

- This will allow us to attach the data we get from the API call to the state. After we change the state the component render() method will execute again and show the changes made to the DOM.

- A new and easy way to fetch data in componentDidMount() is.

```jsx
async componentDidMount(){
  try{
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();

    this.setState({
      items: data,
      isLoaded:true,
    })
  }
  catch(e){
    console.log(e);
  }
}
```

#### `note:`

<ol>
<li>We try to invoke some async function in componentDidMount(), so we have to add keyword <em>async</em>.</li>

<li>(Chinese) try...catch语句将能引发错误的代码放在try块中，并且对应一个响应，然后有异常在catch中被抛出。</li>

<li>fetch and json() are both async functions, so we have to add keyword <em>await</em>.</li>

<li>There will be different data types in the json data, and we have to convert it to Array in setState method.</li>

<li>Also, setState is a async function, you can add a callback function as the second argument, so that you can invoke the callback after setState and before render().</li>

</ol>

#### C.`Conditional rendering.`

`basic format:`

```jsx
return isLoaded ?
      (<div>case A</div>) 
      : 
      (<div>case B</div>);
```

```jsx
render() {
  const { isLoaded, items } = this.state;
  return isLoaded ? (
      <div className="Name">
        <ul>
          {items.map(el => {
            return (
              <li key={el.id}>
                Name:{el.name} | Username:{el.username} | Email:{el.email} |{" "}
                <a href={`https://${el.website}`}>Website</a>
              </li>
            );
          })}
        </ul>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
```

#### `note:`

<ol><li>Conditional rendering is a regular logic when fetching data.</li></ol>

### 2. What is React component lifecycle?

`Initialization => Mounting => Updation => Unmounting`<br>

#### A.`Initialization`

- This is the phase in which the component is going to start its journey by setting up the state(see below) and the props. This is usually done inside the constructor method.

```jsx
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}
//Don't forget this!
export default Game;
```

#### `note:`

<ol><li>Everything in this.state is the initialize status.</li></ol>

#### B.`Mounting`

- Mounting is the phase in which our React Component mounts on the DOMs.

#### I.componenWillMount()

#### <em>`(Do something before re-render in a initialize process.)`</em>

- This method is called just before a component mounts on the DOM or the render method is called. It is called once in a lifecycle.

- `constructor() => componentWillMount() => render()`

#### II.componenDidMount()

#### <em>`(Do something after re-render in a initialize process.)`</em>

- This method is called after the component gets mounted on the DOM. It is called once in a lifecycle. Before the execution of this method, the render is called.

- `constructor() => componentWillMount() => render() => componenDidMount()`

#### III.shouldComponentUpdate()

#### <em>`(Conditional re-render in a update process.)`</em>

- This method determines whether the component should be updated or not. By default, it return true. At some point, if you want to re0render the component on some condition, then shouldComponentUpdate method is the right place.
- (Chinese)默认情况下，re-render 是跟随 state 的改变而触发的，但 shouldComponentUpdate()就提供了一个让你决定什么时候 re-render 的平台。

- `constructor() => componentWillMount() => render() => componenDidMount() =>shouldComponentUpdate()`

#### IV.componentWillUpdate()

#### <em>`(Do something before re-render in a update process.)`</em>

- This method is called once after the 'shouldComponentUpdate() method'.

- `constructor() => componentWillMount() => render() => componenDidMount() =>shouldComponentUpdate() => componentWillUpdate() => re-render()`

#### V.componentDidUpdate()

#### <em>`(Do something after re-render in a update process.)`</em>

- This method is called once after the 'shouldComponentUpdate() method'.

- `constructor() => componentWillMount() => render() => componenDidMount() =>shouldComponentUpdate() => componentWillUpdate() => re-render() => componentDidUpdate()`

#### C.`Unmounting`

- This is the last phase in the component's lifecycle. The component gets unmounted from the DOM in this phase. The method that is available is:

#### I.componenWillUnmount()

#### <em>`(Do something before the component unmount.)`</em>

- This method is called before the unmounting of the component takes place. Before the removal of the component from the DOM, 'componentWillUnmount()' executes.

- `constructor() => componentWillMount() => render() => componenDidMount() =>shouldComponentUpdate() => componentWillUpdate() => re-render() => componentDidUpdate() => componenWillUnmount()`
