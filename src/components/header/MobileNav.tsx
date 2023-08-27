import { FC, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AiOutlineMenu } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiLogin } from "react-icons/ci";

import LanguageOrCurrencyMenu from "./CurrencyLanguageMenu";
import { clearUser } from '../../store/slices/userSlice';

import styles from "../../styles/mobileNav.module.scss";

interface IProps {
  isAuth: boolean;
  Scrolled: boolean;
}

const MobileNav: FC<IProps> = ({isAuth, Scrolled}) => {

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    handleMenuClick();
    dispatch(clearUser());
  }

  useEffect(() => {

    const handleDocumentClick = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMobileMenuOpen]);
  
  return(
    <div className={`${styles.navBar} ${Scrolled ? styles.scrolled : ""}`}>
      <div className={styles.selectors}>
        <div className={styles.selector}>
          <LanguageOrCurrencyMenu menuType="Lan" />
        </div>
        <div className={styles.selector}>
        <LanguageOrCurrencyMenu menuType="Cur" />
        </div>
      </div>
      <div className={styles.menuu} ref={mobileMenuRef}>
        <AiOutlineMenu className={styles.menuIcon} onClick={handleMenuClick}/>
        <div className={`${styles.mobileMenu} ${(isMobileMenuOpen) && (styles.mobileMenuActive)}`}>
          <IoIosCloseCircleOutline onClick={handleMenuClick} className={styles.closeIcon} />
          <ul className={styles.menuItems}>
            <li className={styles.item}><Link to={isAuth ? "/authhome" : "/"} onClick={handleMenuClick}>{t('Home')}</Link></li>
            <li className={styles.item}><Link to="/offer" onClick={handleMenuClick}>{t('Offer')}</Link></li>
            <li className={styles.item}><Link to="/aboutus" onClick={handleMenuClick}>{t('About')}</Link></li>
          </ul>
          {isAuth ? 
            (
              <Link to="/" className={styles.login} onClick={handleLogout}>
                <RxExit className={styles.logoutIcon} />
                {t('Log out')}
              </Link>
            )
            :
            (
              <Link to="/login" className={styles.login} onClick={handleMenuClick}>
                {t('Log in')}
                <CiLogin className={styles.loginIcon}/>
              </Link>
            )
          }
        </div>
      </div>
  </div>
  )
}

export default MobileNav;