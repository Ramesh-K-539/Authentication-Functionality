// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {userName: 'rahul', password: 'rahul@2021'}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onLogin = async () => {
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POSt',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    return (
      <div className="login-container">
        <h1 className="login-heading">Please Login</h1>
        <button type="button" className="login-button" onClick={this.onLogin}>
          Login With Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
