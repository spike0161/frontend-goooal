import React from "react";
import { Link } from "react-router-dom";

const Login = props => {

  // auth or fake auth logic here
  return (
    <div>
    <h1>Welcome! Please Log in to view the App</h1>
    <form>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" id="username" style={{width: 200}}/>
    </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" style={{width: 200}}/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  );
};

export default Login;
