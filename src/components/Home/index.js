// Write your JS code here

import {Component} from 'react'
import './index.css'

import Header from '../Header'
import LogOutButton from '../LogoutButton'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <h1 className="home-heading">Home Route</h1>
        <LogOutButton />
      </div>
    )
  }
}

export default Home
