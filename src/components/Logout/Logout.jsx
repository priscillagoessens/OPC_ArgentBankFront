import {logout, selectUser} from '../../features/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';

function Logout() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const handleLogout =  (e)=>{
    e.preventDefault();
    dispatch(logout())
  }
  return (
    <div>
        <div>
        <a className="main-nav-item" href="./user.html">
        <FontAwesomeIcon icon={faCircleUser}/>
          {user.name}
        </a>
        <a className="main-nav-item" href="./index.html" onClick={(e)=> handleLogout(e)}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export default Logout
