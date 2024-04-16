import { logout } from '../../redux/store/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faSignOut} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userProfile } from "../../redux/actions/action"
import { useEffect } from "react"

function Logout({name}) {
  // const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e)=>{
    e.preventDefault(); 
    dispatch(logout())
    navigate('/');
  }

  const firstName = useSelector((state) => state.user.firstName);

  
  useEffect(()=>{
    dispatch(userProfile())
  },[dispatch])

  return (
    <div>
      <div>
        <a className="main-nav-item">
          <FontAwesomeIcon icon={faCircleUser}/>
          <span>{firstName}</span>
        </a>
        <a className="main-nav-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOut}/>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export default Logout
