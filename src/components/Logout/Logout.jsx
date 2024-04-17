import { logout } from '../../redux/store/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faSignOut} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userProfile } from "../../redux/actions/action"
import { useEffect } from "react"

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e)=>{
    e.preventDefault(); 
    dispatch(logout())
    navigate('/');
  }

  const firstName = useSelector((state) => state.user.firstName);
  const userName = useSelector((state) => state.user.userName);
  
  useEffect(()=>{
    dispatch(userProfile())
  },[dispatch])

  // Vérifie si le username existe et s'il est différent de firstName
  const shouldDisplayUserName = userName && userName !== firstName;

  return (
    <div>
      <div>
        {shouldDisplayUserName && (
          <a className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser}/>
            <span>{userName}</span>
          </a>
        )}
        {!shouldDisplayUserName && (
          <a className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser}/>
            <span>{firstName}</span>
          </a>
        )}
        <a className="main-nav-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOut}/>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export default Logout
