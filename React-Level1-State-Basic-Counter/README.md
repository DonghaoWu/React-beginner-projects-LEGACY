### `This app is about how it works between state and render, also some basic syntax and knowledge about React and JSX.`

### `(Chinese)本应用的目的在于展示如何用class function改变state，从而引发re-render的过程。`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `control + c`

Quit the development mode.

## 1.What is React?

- React is a JavaScript library developed by Facebook in 2011 for building user interfaces.

## 2.What does React do?

- React renders your UI and responds to events.
- AKA -the V in MVC
- Plays nicely with your stack.

## 3.What is JSX?

- Stands for JavaScript Extensions.
- Allow us to write markup in JavaScript.

## 4.What Syntax Should Know Before Learning React?

### `Ternary`

```js
let res = str1 === str2 ? true : false;
```

### `Assign key pairs in an object`

```js
let obj = {
  a: 1
};
//There are four ways to assign key pairs.
//one
obj.b = 2;
//two
obj["c"] = 3;
//three
let char = "d";
obj[char] = 4;
//four
let key = "e";
let val = 5;
let newObj = {
  [key]: val
};
```

### `Spread syntax`

#### replace apply()

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction.apply(null, args);

function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction(...args);
```

#### A more powerful array literal

```js
//copy an array
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

#### A better way to concatenate arrays

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

#### Spread in object literals

```js
let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

### `Object Destructuring`

```js
let apple = {
  color: "red",
  quantity: 10,
  fresh: true
};

let { color, quantity } = apple;
//same as
let color = apple.color;
let quantity = apple.quantity;
```

### `Array Destructuring`

```js
let fruits = ['apple','grape','orange'];

let [a, b, c] = apple;
//same as
let a = fruits[0];
let b = fruits[1];
```

### `Template literals`

```js
let age = 10;
console.log(`I am ${age} years old.`);
```

### `Arrow function`

```js
const sayHi = () => {
  console.log(`I am Sam.`);
};
```

### `Class Definition`

```js
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.genus = "candis";
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}!`);
  }
}
//apply
let sam = new Dog("sam", "Dogo");
sam.sayHi();

//Class Inheritance

class Puppy extends Dog {
  //keyword
  constructor(name, breed, age) {
    super(); //keyword
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  //usually we don't need to define a class method in arrow way
  sayAge() {
    console.log(`I am ${this.age} years old.`);
  }
}

//apply
const steve = new Puppy("Steve", "Bulldog", 3);

steve.sayHi();
steve.sayAge();
console.log(steve.genus);
```
