import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, isProtected }) => {
  const isAuthenticated = useSelector(state => state.auth.isLogIn);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default ProtectedRoute;