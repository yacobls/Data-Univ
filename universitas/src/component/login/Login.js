import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <body>
        <div>
          <form>
            <div className="imgcontainer">
              <h3>LOGIN</h3>
              <img
                src="https://www.planstudyabroad.uniagents.com/images/login.png"
                alt="Avatar"
                className="image"
              />
            </div>

            <div className="container">
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Masukkan Username"
                name="uname"
                required
              />

              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Masukkan Password"
                name="psw"
                required
              />
              <Link to="/info">
                <button type="submit">LOGIN</button>
              </Link>
            </div>
          </form>
        </div>
      </body>
    );
  }
}

export default Login;
