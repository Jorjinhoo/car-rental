import { useSelector } from 'react-redux';



interface RootState {
  auth: {
    user: null | object;
  };
}

const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = !!user;

  return isAuthenticated;
}

export default useAuth;