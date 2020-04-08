import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { setAllJobs, setAllCompanies, setUserInfo, setAllUsers } from './redux/actions/actions'
import Register from './components/Register';
import Login from './components/Login'

import ProfileContainer from './components/containers/ProfileContainer'
import UsersContainer from './components/containers/UsersContainer'
import CompaniesContainer from './components/containers/CompaniesContainer'
import JobsContainer from './components/containers/JobsContainer'

import NavBar from './components/NavBar'
import Home from './components/Home'

class App extends Component {

  componentDidMount(){
    if (localStorage.token){
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then((resp) => {
        console.log(resp)
        this.props.setUserInfo(resp)
        this.props.history.push("/")
      })
    }

    fetch("http://localhost:3000/companies")
    .then(r => r.json())
    .then((companies) => {
      this.props.setAllCompanies(companies)
    })

    fetch("http://localhost:3000/jobs")
    .then(r => r.json())
    .then((jobs) => {
      this.props.setAllJobs(jobs)
    })

    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then((users) => {
      this.props.setAllUsers(users)
    })

  }

  handleLoginSubmit = (userInfo) => {
    console.log("login form submitted")
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then((resp) => {
      console.log(resp)
      localStorage.token = resp.token
      this.props.setUserInfo(resp)
      this.props.history.push("/")
      window.location.reload()
    })
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("register form submitted")
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password

      })
    })
    .then(r => r.json())
    .then((resp) => {
      localStorage.token = resp.token
      this.props.setUserInfo(resp)
      this.props.history.push("/")
      window.location.reload()
    })
  }

  renderForm = (routerProps) => {
    if (this.props.token){
      return <h2>Already logged in as {this.props.username}</h2>
    }
    if(routerProps.location.pathname === "/register"){
      return <Register handleSubmit={this.handleRegisterSubmit}/>
    }
    if(routerProps.location.pathname === "/login"){
      return <Login handleSubmit={this.handleLoginSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    return <ProfileContainer />
  }

  renderUsers = (routerProps) => {
    return <UsersContainer />
  }

  renderCompanies = (routerProps) => {
    return <CompaniesContainer />
  }

  renderJobs = (routerProps) => {
    return <JobsContainer />
  }


  render(){
    return(
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/register" render={ this.renderForm }/>
          <Route path="/login" render={ this.renderForm }/>
          <Route path="/profile" render={ this.renderProfile }/>
          <Route path="/companies" render={this.renderCompanies }/>
          <Route path="/" exact render={Home}/>
          <Route path="/jobs" render={this.renderJobs} />
          <Route path="/users" render={this.renderUsers}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    token: reduxState.user.token,
    username: reduxState.user.username,
    email: reduxState.user.email
  }
}

export default withRouter(
  connect(mapStateToProps, {setAllCompanies, setAllJobs, setUserInfo, setAllUsers})(App)
)


