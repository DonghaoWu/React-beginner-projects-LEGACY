### `This app is about passing props and function from parent component to child component, but also invoke the function in child component .`

### `(Chinese)在子组件运行的绑定在父组件的函数，会对父组件的state产生改动，实现组件与组件之间的联动。`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `control + c`

Quit the development mode.

## 1.Create a stateless component.

```jsx
import React from "react";

const Shape = () => {
  return (
    <div/>;
  )
};
export default Shape;
```

## 2.Import the component in parent component and use it.

```jsx
import React, {Component} from 'react';
import Shape from ./Shape.js

class App extends Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <div>
      <Shape />
      </div>
    )
  }
}
export default App;

```

## 3.Pass parameters to child component;

`The shape property we are passing to our component is going to be passed in as a key on the props object.`

```jsx
<div className="shape-list">
  <Shape shape="square" />
  <Shape shape="circle" />
  <Shape shape="triangle" />
</div>
```

## 4.Accepting dynamic properties into child component

```jsx
const Shape = (props) =>{
  const {shape} = props;
  return(
    <div className = {shape}>
  )
}
```

## 5.Define a method and pass it down to child component

`Define method in parent component(arrow function):`

```jsx
selectShape = shapeName => {
  this.setState({
    selectedShape: shapeName
  });
};
```

`Pass method from parent component:`

```jsx
<div className="shape-list">
  <Shape shape="square" selectShape={this.selectShape} />
  <Shape shape="circle" selectShape={this.selectShape} />
  <Shape shape="triangle" selectShape={this.selectShape} />
</div>
```

`Accept method in child component:`

```jsx
const Shape = (props) =>{
  const {shape, selectShape} = props;
  return(
    <div className = {shape}>
  )
}
```

`Invoke the method child component(take the passing down props as a argument):`

```jsx
const Shape = (props) =>{
  const {shape, selectShape} = props;
  return(
    <div className = {shape} onClick = {() => selectShape(shape)}>
  )
}
```

## 6.Side notes

> The reason why a passing down method can change the state in the parent component is that:

- The method define in parent component is in arrow way.
- You can also define the function in regular way and bind it in parent component constructor.

```jsx
constructor(){
  super();
  this.state = {};

  this.selectShape = this.selectShape.bind(this);
}

selectShape(){
  this.setState({
    selectedShape: shapeName
  });
}
```

> The good point in this app is that we can dynamic pass parameters and method down into child component, invoke the method with the parameters in the child component and update the state in parent component.

**_Two different ways to invoke function in different components_**

- Method define in parent component and invoke in parent component

```jsx
<button onClick = {this.selectShape} type = 'button'>Button</div>
```

- Method define in parent component and invoke in child component

```jsx
<button onClick = {() => props.selectShape()} type = 'button'>Button</div>
```
