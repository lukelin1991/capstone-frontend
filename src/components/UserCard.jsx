import React from 'react'
import { Card } from 'react-bootstrap'

const UserCard = ({user}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../Hemp-Farmer.jpg`)} />
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                    Email: {user.email}
                </Card.Text>
                <Card.Text>
                    Company: { user.companies.length === 0 ? "No Company" : user.companies[0].name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserCard