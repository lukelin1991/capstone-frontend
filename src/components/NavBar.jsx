import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../redux/actions'

const NavBar = (props) => {

    const handleClick = () => {
        console.log("log out")
        props.logOut()
        localStorage.logOut()
    }
    return(
        <ul className="nav">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="register">Register</NavLink>
            </li>
            <li>
                <NavLink to="profile">Profile</NavLink>
            </li>
            <li>
                <NavLink onClick={handleClick}>Log Out</NavLink>
            </li>
        </ul>
    )
}

export default connect(null, {logOut})(NavBar)