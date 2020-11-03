// const divStyle = {
//   color: "#003399"
// };

// const submitStyle = {
//   color: "white",
//   padding: 5,
//   borderRadius: 5,
//   backgroundColor: "#003399",
//   fontSize: 15,
//   justifyContent: "center",
//   height: "35px",
//   width: "90px",
//   shadowColor: "transparent",
//   border: "none"
// };

// const boxStyle = {
//   border: "none",
//   borderBottom: "2px solid #003399",
//   background: "transparent",
//   outline: "none",
//   height: "5px",
//   width: "350px",
//   padding: "10px"
// };

// const boxStyle1 = {
//   border: "none",
//   borderBottom: "2px solid 	#808080",
//   background: "transparent",
//   outline: "none",
//   height: "5px",
//   width: "350px",
//   padding: "10px"
// };

// const checkStyle = {
//   uncheckedColor: "#003399",
//   marginTop: "20px"
// };

import React, { Component } from "react";
import "./style.css";
import Signup from "./Signup";
import Login from "./Login";
import Forgotpswrd from "./Forgotpswrd";
import Changepswrd from "./Changepswrd";

class App extends React.Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
        <Forgotpswrd />
        <Changepswrd />
      </div>
    );
  }
}

export default App;
