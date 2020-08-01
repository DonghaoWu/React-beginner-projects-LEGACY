### `This app is about how to make a react form and access the value (input value / submit value).`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `control + c`

Quit the development mode.

## 1.Create a basic form template.

```jsx
<form><label htmlFor="name"> Name: </label></form>
```

#### `note:`

<ol><li>htmlFor acts as an id.</li></ol>

## 2.Add an input element and a submit button into form

```jsx
<form>
  <label htmlFor="username">
    Name: <input type="text" name:"username" placeholder="Your name" />
  </label>
  <button type="submit">submit</button>
</form>
```

#### `note:`

<ol><li>type is a very important property in form.</li></ol>

## 3.Add an onSubmit function to respond to submit button.

```jsx
<form onSubmit={this.handleSubmit}>
  <label htmlFor="username">
    Name:
    <input
    type="text"
    name:"username"
    placeholder="Your name"
  />
  </label>
  <button type="submit">submit</button>
</form>
```

#### `note:`

<ol><li>onSubmit function will correspond to any type='submit' element inside the form.</li></ol>

## 4.Declare a handleSubmit function and get access to the specific input area value.

```jsx
handleSubmit = event => {
  event.preventDefault();
  console.log("The value you type is", event.target.username.value);
  event.target.username.value = "";
};
```

#### `note:`

<ol><li>event.preventDefault() is to protect the page from refreshing.</li> <li>Add the element name property then you can access the specific value in the onSubmit listener('event.target.elementName.value').</li> <li>You could mutate the specific value immediately.</li><li>In this way, even the input field is empty, since the page doesn't refresh, the value is still stored in state after submit.</li></ol>

## 5.About controlled component.

`Step 1: add some state corresponding to the value`

```jsx
constructor(){
  super();
  this.state = {
    username:"",
  }
}
```

`Step 2: connect the input area with state value`

```jsx
//Add value property into input tag
<input type = 'text' name = 'username' value = {this.state.name} placeholder = 'input name'>
```

`Step 3: Add handleChange function and get called in the input element, onChange will invoke hadleChange function, change the value in the state, then change the value in input field.`

```jsx
handleChange = event => {
  this.setState({
    username: event.target.value
  });
};
```

```jsx
//Add onChange listener into input tag invoking handleChange function.
 <input 
   type = 'text' 
   name = 'username' 
   value = {this.state.name} 
   onChange = {this.handleChange} 
   placeholder = 'input name'
 />
```

#### `note:`

<ol><li>The way to access the value in the onChange listener is 'event.target.value'.</li></ol>

## 6.Handle multiple inputs.

#### `note:`

`Step 1: add some new state corresponding to the value`

```jsx
constructor(){
  super();
  this.state = {
    username:"",
    email:'',
    password:''
  }
}
```

`Step 2: change the handleChange method to correspond to multiple input fields`<br>
Open [my repo React-Level1-state-Counter](https://github.com/DonghaoWu/React-Level1-state-Counter) to see how to assign object key pairs in README.md

```js
handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
};
```

<ol><li>If you just have a input area and one submit button, you don't have to make a controlled component.</li><li>But if you have multiple input areas, maybe you need to add individual onChange function for different input fields.</li><li>But in this way, you can make it more dynamic and reusable.</li></ol>

## 7.Side notes

#### `In this app, we can create a new component to make the label elements' code in Form.js cleaner.`
