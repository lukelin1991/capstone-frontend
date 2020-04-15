import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../redux/actions/actions'
import { NavLink } from 'react-router-dom'
import { Navbar, Button, NavDropdown, Container, ListGroup } from 'react-bootstrap'

const NavBar = (props) => {

    let handleClick = () => {
        console.log("logging out")
        props.logOut()
        localStorage.clear()
    }

    return(
        <div>
            <Navbar className="navbar" bg="dark" variant="dark">
                <Container>
                    <h1><a className="title" href='/'>CannaJobs</a></h1>
                </Container>

                <NavDropdown title="Menu" id="nav-dropdown">
                    <ListGroup>
                        <ListGroup.Item >
                            <NavLink to="/" exact>Home</NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item >
                            <NavLink to="/companies" exact>Companies</NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item >
                            <NavLink to="/jobs" exact>Jobs</NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item >
                            <NavLink to="/users" exact>Users</NavLink>
                        </ListGroup.Item>

                        {localStorage.token ? 
                            <ListGroup.Item >
                                <NavLink to="/profile" exact>My Profile</NavLink>
                            </ListGroup.Item>
                            :
                            null
                        }

                        <ListGroup.Item >
                            <NavLink to="/register" exact>Register</NavLink>
                        </ListGroup.Item>

                    </ListGroup>
                </NavDropdown>
                {localStorage.token?
                <Button variant="success" href='/' onClick={handleClick}>Logout</Button>
                :
                <Button variant="success" href='/login'>Login</Button>}
            </Navbar>
        </div>
    )
}

export default connect(null, {logOut})(NavBar)