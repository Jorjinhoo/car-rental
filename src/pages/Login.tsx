import { signInWithPopup } from "firebase/auth";

import { googleAuthProvider, auth } from "../authentication/firebase";



const Login = () => {

  const login = async () => {
    try {
      const user = await signInWithPopup(auth, googleAuthProvider);
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
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