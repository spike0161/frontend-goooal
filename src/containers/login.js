import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.loginHandler(e);
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/profile" />
    }
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="submit" value="Login" />

        </form>
      </div>
    )
  }
}
