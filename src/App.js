import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import SignIn from './pages/Signin/SignIn';
import User from './pages/User/User'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/user" element={<User />} />
            {/* <Route path="/error" element={<Error/>}/> 
            <Route path="*" element={<Navigate replace to="/error" />} /> */}
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
