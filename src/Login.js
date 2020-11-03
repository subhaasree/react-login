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

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 style={divStyle}>Log In</h2>
        <div className="flex-container">
          <p>Don't have an account?</p>
          <p className="login-text-style">Create account</p>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label style={divStyle}>User Name</label>
          <br />
          <br />
          <input style={boxStyle} type="text" name="name" />
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
          />
          <br />
          <br />
          <div className="flex-container">
            <input style={checkStyle} type="checkbox" name="checkbox" />
            <p>Remember</p>
            <p class="login-fp-text-style">Forgot Password?</p>
          </div>
          <br />
          <br />
          <input type="submit" style={submitStyle} value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
