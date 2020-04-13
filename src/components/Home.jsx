import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import '../stylesheets/home.css'

const Home = () => (
    <div className="main">
        <Jumbotron style={{
                    opacity: 0.8,
                    marginTop:-300}}>
            <h1 style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>CannaJobs</h1>
            <br/>
            <h4>
                Helping you become a leader and a life changer in the Hemp/Cannabis Industry one step at a time.
            </h4>
        </Jumbotron>
    </div>
)
export default Home