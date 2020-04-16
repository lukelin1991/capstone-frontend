import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CardColumns, Button, Modal, Form } from 'react-bootstrap'
import { addJob } from '../../redux/actions/actions'
import JobCard from '../JobCard'
import '../../stylesheets/home.css'

const JobsContainer = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState(0);
    const [description, setDescription] = useState("");

    console.log(props)

    const handleModalSubmit = (e) => {
        e.preventDefault()
        console.log("before fetch, son.")
        fetch("http://localhost:3000/jobs", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            location: location,
            salary: salary,
            description: description,
            company_id: props.user.companies[0].id
            })
        })
        .then(r => r.json())
        .then(data => {
            props.addJob(data)
            handleClose()
        })
    }

    const handleTitleChange = (e) => {
        let { value } = e.target
        setTitle(value)
    }

    const handleLocationChange = (e) => {
        let { value } = e.target
        setLocation(value)
    }

    const handleSalaryChange = (e) => {
        let { value } = e.target
        setSalary(value)
    }

    const handleDescChange = (e) => {
        let { value } = e.target
        setDescription(value)
    }

    return(
        <div className="backGrd">
            <h2>List of Jobs</h2>
            {localStorage.token && props.user.companies.length !== 0 ? <Button variant="info" onClick={handleShow}>Create job</Button> : null }
            <CardColumns>
                {
                    props.jobs.map((jobObj) => {
                        return <JobCard key={jobObj.id} job={jobObj} />
                    })
                }
            </CardColumns>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Post A Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleModalSubmit}>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" name="title" value={title} 
                        placeholder="Enter job title" onChange={handleTitleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="location" name="location" value={location}
                        placeholder="Enter job location" onChange={handleLocationChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicSalary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" name="salary" value={salary} 
                        placeholder="salary" onChange={handleSalaryChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control as="textarea" rows="3" name="description" 
                        value={description} placeholder="Job Description" onChange={handleDescChange} />
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
        jobs: reduxState.jobs.all,
        user: reduxState.user
    }
}

export default connect(mstp, { addJob })(JobsContainer)