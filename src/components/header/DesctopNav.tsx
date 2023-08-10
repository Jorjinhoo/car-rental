import React, {FC} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import LanguageMenu from "./LanguageMenu";

import styles from "../../styles/desctopNav.module.scss"

interface IDesctopNavProps {
  Scrolled: boolean; 
}


const DesctopNav: FC<IDesctopNavProps> = ({Scrolled}) => {

  const { t } = useTranslation();

  return (
    <div className={`${styles.container} ${Scrolled ? styles.scrolled : ""}`}>
      <div className={styles.items}>
        <Link to="/" className={`${styles.item} ${styles.fitem}`}>{t('Home')}</Link>
        <Link to="/Offer" className={`${styles.item} ${styles.fitem}`}>{t('Offer')}</Link>
        <Link to="/About" className={`${styles.item} ${styles.fitem}`}>{t('About')}</Link>
      </div>
      <div className={styles.items}>
        <LanguageMenu />
        <Link to="/Login" className={`${styles.item} ${styles.login}`}>{t('Log in')}</Link>
      </div>
    </div>
  )
}

export default DesctopNav;