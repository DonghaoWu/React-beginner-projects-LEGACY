### `This app is about how to set up react router.`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `control + c`

Quit the development mode.

## A brief check the format of React-router<br>

```c++
1.check npm Install.
2.Location: index.js, import Router & wrap App.
3.A components folder with a index.js.
4.A switchboard component, for example, name it 'Routes', import in App.js.
5.Put the switchboard component inside App component.
6.Put Link any place.
```

## The flow to add a new component to switchboard<br>

```c++
1.Create the file in components folder, export it
2.Import the new component in index.js inside of components folder.
3.Import the new component in switchboard component.
4.Add the path and the new component inside of Switch section in switchboard component
5.Put Link any place.
```

#### **`Follow question: How to made a sub router inside a route?`**<br>

### 1. Install React-Router-Dom(install globally)

```bash
$ npm install --save react-router-dom
```

#### `note:`

<ol><li>Installing globally means this will automatically be available in any file or folder on your local machine.</li></ol>

### 2. Install routing on our app

`location: index.js`

```js
import React form 'react';
import ReactDom form 'react-dom';
import App from './App.js';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

#### `note:`

<ol>
<li>import Router.</li>
<li>wrap App component inside the Router Component.</li>
<li>After step 2, we can use any react-router-dom library key words inside **App component**.</li>
</ol>

### 3. Create a folder call components inside src folder.

#### `note:`

<ol>
<li>Move all your components inside of components folder.</li>
<li>In the future, always follow this pattern of storing your non-core components inside a components folder.</li>
</ol>

### 4. Create an index.js folder inside of components folder

`location: index.js in components folder`

```js
export { default as Hello } from "./Hello.js";
export { default as Welcome } from "./Welcome.js";
export { default as Pokemon } from "./Pokemon.js";
```

#### `note:`

<ol><li>The index.js will serve solely as a place for us to export our component.</li>
<li>(Chinese)这个index.js相当于一个组件地址查询文件，相当于一个窗口，把所有文件夹内的组件都接入这里，然后供文件夹外的文件引用.</li>
</ol>

### 5. How to import the files from components folder?

`location: Any js file except components folder`

```js
//By components' name, object destructuring
import {Hello, Welcome, Pokemon} from './components';
//apply
<Hello />

//All components
import * as Components form './components';
//apply
<Components.Hello />
```

#### `note:`

<ol><li>index.js is a shorthand to get access to all components inside the folder, you can also access the component by the exact path.</li>
</ol>

`注意：第三步到第五步都跟react-router无关，只是相当于养成一个将components归类的好习惯。`

### 6. Create a `Routes.js` file, acts as our switchboard component.

`创建一个可转变组件`
`location: outside of component folder`

```js
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Hello, Welcome, Pokemon } from "./components";

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path="/hello" component={Hello} />;
        <Route path="/welcome" component={Welcome} />;
        <Route path="/home" component={Pokemon} />;
        <Route component={Pokemon} />;
      </Switch>
    );
  }
}

export default Routes;
```

#### `note:`

<ol>
<li>import the component which you want to switch.</li>
<li>set up the paths and the responding components.</li>
<li>Now we are returning the Switch Component. Each route is wrapper inside the Switch Component</li>
<li>notice: the order of the path matters.</li>
</ol>

### 7. Change your App.js to a functional (stateless) component that will render your Routes Components.

`location: App.js`

```js
import React from 'react';
import Routes from './Routes';

const App = () =>{
  return{
    <Header />;
    <Routes />;
    <Footer />;
  }
}

export default App
```

#### `note:`

<ol>
<li>In the three components inside of App, only Routes component is a switch component.</li>
<li>These will lead some problems, sometime we don't want to change the whole component, we want to change others component.</li>
</ol>

`在这里的设定，决定了在Route组件里面的任何Link，都会引发整个页面返回到<App>组件的组织结构模式，App组件的界面即Header+Routes+Footer而这是一个潜在问题。`

### 8. About setting up the paths.

#### `note:`

<ol>
<li>Route are checked top to bottom and the first one that matches will be the one chosen.</li>
<li>To specify that this route must be hit exactly, use the **exact path** prop.</li>
<li>A path of  '/'  **MUST BE** last or an exact path or it will be hit by any other undefined path .</li>
<li>React Router uses *partial* matching so make sure to put specific routes first .</li>
</ol>

### 9. Apply a Link.

`location: wherever you want to add a link and change the current component.`

```js
import { Link } from "react-router-dom";
```

#### `note:`

<ol>
<li>You can add link anywhere, but the link can just only lead you back to App component.</li>
</ol>
