import React, {FC} from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/desctopNav.module.scss"


const DesctopNav: FC = () => {
  return(
    <div className={styles.container}>
      <div className={styles.items}>
        <Link to="/" className={styles.item}>Home</Link>
        <Link to="/Offer" className={styles.item}>Offer</Link>
        <Link to="/About" className={styles.item}>About</Link>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>ENG</div>
        <div className={styles.item}>USD</div>
        <Link to="/Login" className={`${styles.item} ${styles.login}`}>Log in</Link>
      </div>
    </div>
  )
}

export default DesctopNav;