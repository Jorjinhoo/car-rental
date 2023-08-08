import React, {FC, useState} from "react";
import { Link } from "react-router-dom";

import LanguageMenu from "./LanguageMenu";

import styles from "../../styles/desctopNav.module.scss"



const DesctopNav: FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Link to="/" className={`${styles.item} ${styles.fitem}`}>Home</Link>
        <Link to="/Offer" className={`${styles.item} ${styles.fitem}`}>Offer</Link>
        <Link to="/About" className={`${styles.item} ${styles.fitem}`}>About</Link>
      </div>
      <div className={styles.items}>
        <LanguageMenu />
        <Link to="/Login" className={`${styles.item} ${styles.login}`}>Log in</Link>
      </div>
    </div>
  )
}

export default DesctopNav;