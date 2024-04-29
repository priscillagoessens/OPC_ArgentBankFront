import { logout } from '../../redux/store/authSlice';
import { deleteUserInfo } from '../../redux/store/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faSignOut} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstName = useSelector((state) => state.user.firstName);
  const userName = useSelector((state) => state.user.userName);

  const handleLogout = (e)=>{
    e.preventDefault(); 
    dispatch(logout())
    dispatch(deleteUserInfo())
    navigate('/');
  }

  // Vérifie si le username existe et s'il est différent de firstName
  const showUserName = userName && userName !== firstName;

  return (
    <div>
      <div>
          <Link to="/profile" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser}/>
            {showUserName ? (
              <span>{userName}</span>
            ):(
              <span>{firstName}</span>
            )}
          </Link>
          <Link className="main-nav-item" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOut}/>
            Sign Out
          </Link>
      </div>
    </div>
  )
}

export default Logout
