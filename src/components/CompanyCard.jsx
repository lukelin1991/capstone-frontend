import React from 'react'
import { Card } from 'react-bootstrap'

const CompanyCard = ({company}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../cannabidiol.jpg`)} />
            <Card.Body>
                <Card.Title>{company.name}</Card.Title>
                <Card.Text>
                    Current # of Jobs posted: {company.jobs.length === 0 ? "0" : company.jobs.length}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CompanyCard