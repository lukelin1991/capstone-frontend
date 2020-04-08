import React from 'react'
import { Card } from 'react-bootstrap'

const JobCard = ({job}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../Hemp-Farmer.jpg`)} />
            <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>Salary: {job.salary}</Card.Text>
                <Card.Text>Location: {job.location} </Card.Text>
                <Card.Text>Description: {job.description} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default JobCard