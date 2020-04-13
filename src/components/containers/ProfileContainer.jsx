import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Alert} from 'react-bootstrap'
import '../../stylesheets/home.css'

class ProfileContainer extends Component {
    render(){
        return(
            <div className="profileBackGrd">
                {localStorage.token ? 
                    <div>
                        <h2>My Profile</h2>
                        <p>Username: {this.props.user.username}</p>
                        <p>Email: {this.props.user.email}</p>
                        <p>Company: {this.props.user.companies.length !== 0 ? this.props.user.companies[0].name : "None"}</p>
                        <p>How many Jobs I've Applied to: {this.props.applications.length}</p>
                        <Button>Delete</Button>
                    </div>
                    :
                    <h1>Please Register Or Log In First</h1>
                }
            </div>
        )
    }
}

const mstp = (reduxState) => {
    return {
        user: reduxState.user,
        companies: reduxState.user.companies,
        applications: reduxState.user.applications
    }
}

export default connect(mstp, {})(ProfileContainer)