import { useSelector } from 'react-redux';



interface RootState {
  auth: {
    user: boolean,
    userDetails: {
      displayName: string | null,
      email: string | null,
      uid: string | null,
      photoURL: string | null
    }
  };
}

const useAuth = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.user);
  const userDetails = useSelector((state: RootState) => state.auth.userDetails);

  return {
    isAuthenticated,
    userDetails,
  };
}

export default useAuth;