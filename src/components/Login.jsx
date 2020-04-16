import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import '../stylesheets/login.css'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {username, password} = this.state

    return (
      <div className="login">
        <h1>Please Log in</h1>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" name="username" autoComplete="off" value={username} placeholder="Enter username" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" autoComplete="off"
              value={password} placeholder="Password" onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit" value="Submit">
              Login
          </Button>
        </Form>
      </div>
    );
  }

}

export default Login;