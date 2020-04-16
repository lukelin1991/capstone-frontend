import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Alert, Modal, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import '../../stylesheets/home.css'
import { deleteUser, addCompanyUser } from '../../redux/actions/actions'

const  ProfileContainer = (props) => {
    // delete character functionality...
    const [show, setShow] = useState(false);
    const [confirmation, setConfirmation] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory()

    const handleChange = (e) => {
        let { value } = e.target
        setConfirmation(value)
    }

    const handleDelete = () => {
        confirmation === "I confirm that I will delete this account" ? 
            fetch(`http://localhost:3000/users/${props.user.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${localStorage.token}`
                }
            })
            .then(r => r.json())
            .then(data => {
                deleteUser(data)
                localStorage.clear()
                history.push('/')
                window.location.reload()
            })
        :
            alert("Sorry, your confirmation input is incorrect.");
    }

    // joining a company functionality...
    const [modalShow, setModalShow] = useState(false)
    const [companyChosen, setCompanyChosen] = useState(0)

    const handleModalClose = () => setModalShow(false)
    const handleModalShow = () => setModalShow(true)

    const handleModalSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/companyusers", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            user_id: props.user.id,
            company_id: companyChosen })
        })
        .then(r => r.json())
        .then(data => {
            addCompanyUser(data)
            handleModalClose()
            window.location.reload()
        })
    }

    const handleSelectChange = (e) => {
        let { value } = e.target
        setCompanyChosen(value)
    }

    return(
        <div className="profileBackGrd">
            {localStorage.token ? 
                <div>
                    <Alert show={show} variant="danger" onClose={handleClose} dismissible>
                        <Alert.Heading>Are you sure?!</Alert.Heading>
                        <h5>
                        In order to confirm deleting your character, 
                        please type in the following inputs before clicking "Confirm Delete", 
                        or else press the x on the top right hand corner.
                        </h5>
                        <br />
                        <h6>please type "I confirm that I will delete this account" </h6>
                        <input type="confirmation" name="confirmation" value={confirmation} onChange={handleChange}/>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={handleDelete} variant="outline-danger">
                                Confirm Delete!
                            </Button>
                        </div>
                    </Alert>

                    <h2>My Profile</h2>
                    <p>Username: {props.user.username}</p>
                    <p>Email: {props.user.email}</p>
                    <p>Company: {props.user.companies.length !== 0 ? props.user.companies[0].name : "None"}</p>
                    <p>How many Jobs I've Applied to: {props.applications.length}</p>
                    <Button variant="info" onClick={handleShow}>Delete</Button>
                    {' '}
                    { props.user.companies.length === 0? <Button variant="info" onClick={handleModalShow}>Join a Company</Button> : null }

                    <Modal show={modalShow} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Join a Company</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form onSubmit={handleModalSubmit}>
                            <Form.Group controlId="formControlSelect">
                                <Form.Label>Companies</Form.Label>
                                <Form.Control as="select" onChange={handleSelectChange}>
                                    {props.companies.map((companyObj) => {
                                        return <option key={companyObj.id} id={companyObj.id} value={companyObj.id}>{companyObj.name}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Button variant="primary" type="submit" value="Submit">
                                Submit
                            </Button>
                        </Form>
                        </Modal.Body>
                    </Modal>

                </div>
                :
                <h1>Please Register Or Log In First</h1>
            }
        </div>
    )
}

const mstp = (reduxState) => {
    return {
        user: reduxState.user,
        companies: reduxState.companies.all,
        applications: reduxState.user.applications
    }
}

export default connect(mstp, {deleteUser, addCompanyUser})(ProfileContainer)