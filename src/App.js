import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile'
import Footer from './components/Footer/Footer';
import {useSelector  } from 'react-redux';
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state)=> state.auth.token);
  if (isAuthenticated == null ) {
    return <Navigate to="/login" />;
  }
  //permet de rendre le composant associé  
  return <Outlet/>;
}

function App() {
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
