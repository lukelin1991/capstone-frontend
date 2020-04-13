import React from 'react'
import { connect } from 'react-redux'
import { CardColumns } from 'react-bootstrap'
import CompanyCard from '../CompanyCard'
import '../../stylesheets/home.css'

const CompaniesContainer = (props) => {
    return(
        <div className="backGrd">
            <h2>List of Companies</h2>
            <CardColumns>
                {
                    props.companies.map((companyObj) => {
                        return <CompanyCard key={companyObj.id} company={companyObj} />
                    })
                }
            </CardColumns>
        </div>
    )
}

const mstp = (reduxState) => {
    return {
        companies: reduxState.companies.all
    }
}

export default connect(mstp, {})(CompaniesContainer)