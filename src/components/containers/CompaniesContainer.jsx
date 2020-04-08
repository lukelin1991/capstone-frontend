import React from 'react'
import { connect } from 'react-redux'
import { Container, CardColumns } from 'react-bootstrap'
import CompanyCard from '../CompanyCard'

const CompaniesContainer = (props) => {
    return(
        <Container>
            <h2>List of Companies</h2>
            <CardColumns>
                {
                    props.companies.map((companyObj) => {
                        return <CompanyCard key={companyObj.id} company={companyObj} />
                    })
                }
            </CardColumns>
        </Container>
    )
}

const mstp = (reduxState) => {
    return {
        companies: reduxState.companies.all
    }
}

export default connect(mstp, {})(CompaniesContainer)