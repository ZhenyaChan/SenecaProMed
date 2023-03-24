import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';

const useRoleCheck = (allowedRoles) => {
  const { userData, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn || !allowedRoles.includes(userData.role)) {
    navigate('/login', { replace: true });
  }
};

export default useRoleCheck;
