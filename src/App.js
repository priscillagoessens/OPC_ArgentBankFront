import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile'
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector  } from 'react-redux';
import { userProfile } from './redux/actions/action';

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.user.isCo);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet/>;
}

function App() {
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  if(token){
    dispatch(userProfile({ isCo: true }));
    
  }

  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile/>}/>
           </Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
