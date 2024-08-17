import React from "react";

export default function Login() {
  return (
    <form>
      <div className="container">
        <h1>Login</h1>
        <form id="login-form">
          <babel htmlFor="username">Username: </babel>
          <input type="text" id="username" name="username" />
          <br />
          <br />
          <babel htmlFor="password">Password: </babel>
          <input type="password" id="password" name="password" />
          <br />
          <br />
          <button className="login-btn">Login</button>
        </form>
        <p id="error-message"></p>
        <a href="#" className="link">
          don't have an account? Register one
        </a>
      </div>
    </form>
  );
}
