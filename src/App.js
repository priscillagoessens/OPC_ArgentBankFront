import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile'
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isLogIn);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
}

function App() {

  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute logIn={true}/>}>
              <Route path='/profile' element={<Profile/>}/>
           </Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
