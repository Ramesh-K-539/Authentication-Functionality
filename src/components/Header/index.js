// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <navbar className="nav-bar">
    <ul className="header">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </navbar>
)

export default Header
