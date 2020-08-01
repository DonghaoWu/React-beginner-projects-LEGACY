import React, { Component } from "react";
import "./App.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    //event.preventDefault();
    console.log(this.state);
    alert(`      Your username is ${this.state.username}.
      Your email is ${this.state.email}.
      Your password is ${this.state.password}`);
    // event.target.username.value = "";
    // event.target.email.value = "";
    // event.target.password.value = "";
  };

  render() {
    //console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit} className="main-form">
        <label htmlFor="username">
          Name:
          <input
            type="text"
            placeholder="Your username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            placeholder="Your email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    );
  }
}
export default Form;
