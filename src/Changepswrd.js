const divStyle = {
  color: "#003399"
};

const verifyStyle = {
  color: "white",
  padding: 5,
  borderRadius: 5,
  backgroundColor: "#003399",
  fontSize: 15,
  justifyContent: "center",
  height: "35px",
  width: "175px",
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

class Changepswrd extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h2 style={divStyle}>Change Password</h2>
        <div className="flex-container">
          <p>Don't have an account?</p>
          <p className="login-text-style">Create account</p>
        </div>

        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <label>New Password</label>
          <br />
          <br />
          <input
            style={boxStyle1}
            type="password"
            name="Password"
            placeholder="*********"
          />
          <br />
          <br />
          <label>Re-Enter Password</label>
          <br />
          <br />
          <input
            style={boxStyle1}
            type="password"
            name="Password"
            placeholder="Re-Type Password"
          />
          <br />
          <br />
          <br />
          <br />
          <input type="submit" style={verifyStyle} value="Change Password" />
        </form>
      </div>
    );
  }
}

export default Changepswrd;
