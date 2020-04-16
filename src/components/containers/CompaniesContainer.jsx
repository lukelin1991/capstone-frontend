import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CardColumns, Button, Modal, Form } from 'react-bootstrap'
import { addCompany } from '../../redux/actions/actions'
import CompanyCard from '../CompanyCard'
import '../../stylesheets/home.css'

const CompaniesContainer = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("");

    const handleModalSubmit = (e) => {
        e.preventDefault()
        console.log("before fetch, son.")
        fetch("http://localhost:3000/companies", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            })
        })
        .then(r => r.json())
        .then(data => {
            props.addCompany(data)
            handleClose()
        })
    }

    const handleChange = (e) => {
        let { value } = e.target
        setName(value)
    }

    return(
        <div className="backGrd">
            <h2>List of Companies</h2>
            {localStorage.token ? <Button onClick={handleShow}>Create Company</Button> : null }
            <br />
            <br />
            <CardColumns>
                {
                    props.companies.map((companyObj) => {
                        return <CompanyCard key={companyObj.id} company={companyObj} />
                    })
                }
            </CardColumns>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleModalSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" name="name" value={name} 
                        placeholder="Enter job name" onChange={handleChange} />
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
        companies: reduxState.companies.all
    }
}

export default connect(mstp, { addCompany })(CompaniesContainer)