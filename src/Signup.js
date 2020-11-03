const divStyle = {
  color: "#003399"
};

const submitStyle = {
  color: "white",
  padding: 5,
  borderRadius: 5,
  backgroundColor: "#003399",
  fontSize: 15,
  justifyContent: "center",
  height: "35px",
  width: "90px",
  shadowColor: "transparent",
  border: "none"
};

const boxStyle = {
  border: "none",
  borderBottom: "2px solid #003399",
  background: "transparent",
  outline: "none",
  height: "5px",
  width: "350px",
  padding: "10px"
};

const boxStyle1 = {
  border: "none",
  borderBottom: "2px solid 	#808080",
  background: "transparent",
  outline: "none",
  height: "5px",
  width: "350px",
  padding: "10px"
};

const checkStyle = {
  uncheckedColor: "#003399",
  marginTop: "20px"
};

import React, { Component } from "react";
import "./style.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePassChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.name) {
      return this.setState({ error: "FullName is required" });
    }
    if (!this.state.email) {
      return this.setState({ error: "Email is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    return this.setState({ error: "" });
  }

  render() {
    return (
      <div>
        <h2 style={divStyle}>Sign Up</h2>
        <div className="flex-container">
          <p>Already have an account?</p>
          <p className="Signup-text-style">Login</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label style={divStyle}>Full Name</label>
          <br />
          <br />
          <input
            style={boxStyle}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />
          <br />
          <label>Email</label>
          <br />
          <br />
          <input
            style={boxStyle1}
            type="email"
            name="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <br />
          <input
            style={boxStyle1}
            type="password"
            name="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handlePassChange}
          />
          <br />
          <br />
          <div className="flex-container">
            <input style={checkStyle} type="checkbox" name="checkbox" />
            <p>I accept</p>
            <p class="Signup-text-style">Privacy Policy</p>
          </div>
          <br />
          <br />

          <input
            type="submit"
            style={submitStyle}
            value="Signup"
            onPress={() => navigation.navigate("Login")}
          />

          {this.state.error && (
            <p onClick={this.dismissError}>{this.state.error}</p>
          )}
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Signup;
