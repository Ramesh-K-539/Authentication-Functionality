// Write your JS code here

import './index.css'
import Header from '../Header'
import LogOutButton from '../LogoutButton'

const About = () => (
  <div className="about-container">
    <Header />
    <h1 className="about-heading">About Route</h1>
    <LogOutButton />
  </div>
)

export default About
