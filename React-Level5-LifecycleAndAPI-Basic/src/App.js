import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(Array.isArray(data));
      this.setState({
        items: data,
        isLoaded: true
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { isLoaded, items } = this.state;
    return isLoaded ? (
      <div className="App">
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
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default App;
