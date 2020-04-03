import React, { Component } from "react";
import Logo from '../images/GOOAL.png'
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

      <div className="form-container">
      <form onSubmit={this.submitHandler}>
        <img src={Logo} alt="Goal Image" id="login-logo"/>
          <div className="form-group row">
              <label for="inputUsername" className="col-sm-2 col-form-label label" >Username</label>
              <div className="col-sm-10">
                  <input type="username" className="form-control" id="inputUsername" placeholder="Username..." />
              </div>
          </div>
          <div className="form-group row">
              <label for="inputPassword" className="col-sm-2 col-form-label label">Password</label>
              <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword" placeholder="Password..." />
              </div>
          </div>
          <div className="form-group row">
              <div className="col-sm-10 offset-sm-2">
                  <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
          </div>
      </form>
      </div>


    )
  }
}
