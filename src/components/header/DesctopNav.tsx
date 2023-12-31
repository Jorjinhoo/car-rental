import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import LanguageOrCurrencyMenu from "./CurrencyLanguageMenu";
import { clearUser } from '../../store/slices/userSlice';

import styles from "../../styles/desctopNav.module.scss"

interface IDesctopNavProps {
  Scrolled: boolean;
  path: string;
  isAuth: boolean;
}


const DesctopNav: FC<IDesctopNavProps> = ({Scrolled, path, isAuth}) => {
  
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(clearUser());
  }

  return (
    <div className={`${styles.container} ${Scrolled ? styles.scrolled : ""}`}>
      <div className={styles.items}>
        <Link to={path} className={`${styles.item} ${styles.fitem}`}>{t('Home')}</Link>
        <Link to="/Offer" className={`${styles.item} ${styles.fitem}`}>{t('Offer')}</Link>
        <Link to="/aboutus" className={`${styles.item} ${styles.fitem}`}>{t('About')}</Link>
      </div>
      <div className={styles.items}>
        <LanguageOrCurrencyMenu menuType="Lan" />
        <LanguageOrCurrencyMenu menuType="Cur" />
        { 
          isAuth ?
            <Link to="/" onClick={handleLogout} className={`${styles.item} ${styles.logout}`}>{t('Log out')}</Link>
            :
            <Link to="/Login" className={`${styles.item} ${styles.login}`}>{t('Log in')}</Link>
        }
      </div>
    </div>
  )
}

export default DesctopNav;