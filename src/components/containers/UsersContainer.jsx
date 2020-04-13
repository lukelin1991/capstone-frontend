import React from 'react'
import { connect } from 'react-redux'
import { CardColumns } from 'react-bootstrap'
import UserCard from '../UserCard'
import '../../stylesheets/home.css'

const UsersContainer = (props) => {
    return(
        <div className="backGrd">
            <h2>List of Users</h2>
            <CardColumns>
                {
                    props.users.map((userObj) => {
                        return <UserCard key={userObj.id} user={userObj} />
                    })
                }
            </CardColumns>
        </div>
    )
}

const mstp = (reduxState) => {
    return {
        users: reduxState.users.all
    }
}

export default connect(mstp, {})(UsersContainer)