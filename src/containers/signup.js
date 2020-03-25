import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      userName: ""
    };
  }



  nameHandler = e => {
    this.setState({ name: e.target.value });
  };

  userNameHandler = e => {
    this.setState({ userName: e.target.value });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Welcome to GOOOAL </h1>
        <h3>Sign up to view the App</h3>
        <form onSubmit={e => this.props.signUpHandler(e, this.state)}>
          <div class="form-group">
            <label for="username">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              onChange={e => this.nameHandler(e)}
            />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              onChange={e => this.userNameHandler(e)}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <Link to='/login'><button>Already a member?</button></Link>
        </form>
      </div>
    );
  }
}
