import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../stylesheets/register.css'
class Register extends Component {
    state = {
        username: "",
        email: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    render(){
        let {username, email, password} = this.state
        return(
            <div className="register">
                <h1>Please Register</h1>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" name="username" value={username} 
                            placeholder="Enter username" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={email}
                            placeholder="Enter email" onChange={this.handleChange}/>

                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} 
                            placeholder="Password" onChange={this.handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" value="Submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Register;
