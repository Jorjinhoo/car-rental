import { signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { googleAuthProvider, auth } from "../authentication/firebase";
import { setUser } from '../store/slices/userSlice';

import { FcGoogle } from "react-icons/fc";

import styles from "../styles/login.module.scss";



const Login = () => {

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleAuthProvider);
      const user = userCredential.user
      // console.log(user);
      dispatch(setUser(user));
      console.log(user);
      navigate('/authhome');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }

  return(
    <div className={styles.container}>
      <div className={styles.menuBackground}></div>
      <div className={styles.loginGroup}>
        <div className={styles.loginBTN} onClick={login}><FcGoogle className={styles.gogIcon} />{t('Sing in with Google')}</div>
        {t('Or')}
        <div className={styles.signupBTN}>{t('Signup')}</div>
      </div>
    </div>
  )
}

export default Login;