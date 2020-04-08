import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileContainer extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>My Profile</h2>
                <p>Username: {this.props.user.username}</p>
                <p>Email: {this.props.user.email}</p>
            </div>
        )
    }
}

const mstp = (reduxState) => {
    return {
        user: reduxState.user
    }
}

export default connect(mstp, {})(ProfileContainer)