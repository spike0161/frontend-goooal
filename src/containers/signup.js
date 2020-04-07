import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import Logo  from '../images/GOOAL.png'

 class Signup extends React.Component {
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
    return (
      <div>

        <div className="form-container">
          <form onSubmit={e => this.props.signUpHandler(e, this.state)}>
            <h3 className="signup-text">Sign up!!</h3>
            <img src={Logo} alt="Goal Image" id="login-logo"/>
            <div class="form-group row">
              <label for="username" className="col-sm-2 col-form-label label">Name</label>
              <div className="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="name"
                onChange={e => this.nameHandler(e)}
                />
            </div>
            </div>
            <div class="form-group row">
              <label for="username" className="col-sm-2 col-form-label label">Username</label>
              <div className="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="username"
                onChange={e => this.userNameHandler(e)}
                />
            </div>
            </div>
            <div className="col-sm-10 offset-sm-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <Link to='/login'><p>Already a member?</p></Link>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup
