import React from 'react'
import { connect } from 'react-redux'
import { Container, CardColumns } from 'react-bootstrap'
import JobCard from '../JobCard'

const JobsContainer = (props) => {
    return(
        <Container>
            <h2>List of Jobs</h2>
            <CardColumns>
                {
                    props.jobs.map((jobObj) => {
                        return <JobCard key={jobObj.id} job={jobObj} />
                    })
                }
            </CardColumns>
        </Container>
    )
}

const mstp = (reduxState) => {
    return {
        jobs: reduxState.jobs.all
    }
}

export default connect(mstp, {})(JobsContainer)