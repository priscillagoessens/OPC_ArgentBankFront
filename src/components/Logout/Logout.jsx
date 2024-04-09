import {logout, selectUser} from '../../store/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e)=>{
    e.preventDefault(); 
    dispatch(logout())
    navigate('/');
  }

  return (
    <div>
        <div>
        <a className="main-nav-item" >
        <FontAwesomeIcon icon={faCircleUser}/>
          {user.name}
        </a>
        <a className="main-nav-item" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export default Logout
