import React from 'react'
import { connect } from 'react-redux'
import { Container, CardColumns } from 'react-bootstrap'
import UserCard from '../UserCard'

const UsersContainer = (props) => {
    return(
        <Container>
            <h2>List of Users</h2>
            <CardColumns>
                {
                    props.users.map((userObj) => {
                        return <UserCard key={userObj.id} user={userObj} />
                    })
                }
            </CardColumns>
        </Container>
    )
}

const mstp = (reduxState) => {
    return {
        users: reduxState.users.all
    }
}

export default connect(mstp, {})(UsersContainer)