import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile'
import Footer from './components/Footer/Footer';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {

  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <ProtectedRoute isProtected={true}>
              <Profile />
            </ProtectedRoute>
          }
          />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
