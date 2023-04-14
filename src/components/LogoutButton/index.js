// Write your JS code here
import './index.css'

import Cookies from 'js-cookie'

const LogOutButton = props => {
  const onLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <button type="button" className="log-out-button" onClick={onLogOut}>
        Logout
      </button>
    </>
  )
}

export default LogOutButton
