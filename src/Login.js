import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    let { email, password, confirmPassword } = this.state;
    let errors = {};
    if (password !== confirmPassword) {
      errors["confirmPassword"] = "Password is not same";
    }

    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (email && !pattern.test(email)) {
      errors["email"] = "Please enter valid email address.";
    }

    this.setState({ errors });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label>Enter Email id</label>
            <input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
            <div>{this.state.errors.email}</div>
          </div>
          <div>
            <label>Enter Password</label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <label>Enter Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleOnChange}
            />
            <div>{this.state.errors.confirmPassword}</div>
          </div>
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default Login;
