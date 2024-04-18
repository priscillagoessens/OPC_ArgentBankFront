import { logout } from '../../redux/store/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faSignOut} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { userProfile } from "../../redux/actions/action"
import { useEffect } from "react"

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstName = useSelector((state) => state.user.firstName);
  const userName = useSelector((state) => state.user.userName);

  const handleLogout = (e)=>{
    e.preventDefault(); 
    dispatch(logout())
    navigate('/');
  }

  useEffect(()=>{
    dispatch(userProfile())
  },[dispatch])

  // Vérifie si le username existe et s'il est différent de firstName
  const showUserName = userName && userName !== firstName;

  return (
    <div>
      <div>
        {showUserName && (
          <Link to="/profile" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser}/>
            <span>{userName}</span>
          </Link>
        )}
        {!showUserName && (
          <Link className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser}/>
            <span>{firstName}</span>
          </Link>
        )}
        <Link className="main-nav-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOut}/>
          Sign Out
        </Link>
      </div>
    </div>
  )
}

export default Logout
