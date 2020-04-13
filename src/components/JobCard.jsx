import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Form } from 'react-bootstrap'
import { setUserInfo, addApplication } from '../redux/actions/actions'

const JobCard = (props) => {
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleModalSubmit = (e) => {
        e.preventDefault()
        console.log(props.user_id, "before fetch, son.")
        fetch("http://localhost:3000/applications", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            description: description,
            user_id: props.user_id,
            job_id: props.job.id })
        })
        .then(r => r.json())
        .then(data => {
            props.addApplication(data)
            handleClose()
            // window.location.reload()
        })
    }
    
    const handleChange = (e) => {
        let { value } = e.target
        console.log(e.target)
        setDescription(value)
    }


    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(`../Hemp-Farmer.jpg`)} />
                <Card.Body>
                    <Card.Title>{props.job.title}</Card.Title>
                    <Card.Text>Salary: {props.job.salary}</Card.Text>
                    <Card.Text>Location: {props.job.location} </Card.Text>
                    <Card.Text>Description: {props.job.description} </Card.Text>
                    {localStorage.token ? <Button variant="info" onClick={handleShow}>Apply Here</Button> : null }
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Application Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleModalSubmit}>
                    <Form.Group controlId="formBasicDescription">

                        <Form.Label>Your Application</Form.Label>
                        <Form.Control as="textarea" rows="3" name="description" 
                        value={description} placeholder="Copy and paste your resume" onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Submit">
                        Submit
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
        </div>
    
    )
}

const mstp = (reduxState) => {
    return {
        user_id: reduxState.user.id,
        user: reduxState.user
    }
}

export default connect(mstp, {setUserInfo, addApplication})(JobCard)