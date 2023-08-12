import { signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { googleAuthProvider, auth } from "../authentication/firebase";
import { setUser } from '../store/slices/userSlice';



const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithPopup(auth, googleAuthProvider);
      dispatch(setUser(user));
      console.log(user);
      navigate('/authhome');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }

  return(
    <div>
      <button onClick={login} style={{marginTop: '300px'}}>Login</button>
    </div>
  )
}

export default Login;