import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DesctopNav from "./DesctopNav";
import MobileNav from "./MobileNav"; 

import styles from "../../styles/header.module.scss";

const Header: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.container}>

        <Link to="/" className={styles.logo}>FreeR</Link>
        {windowWidth <= 700 ? <MobileNav /> : <DesctopNav />}

      </div>
    </div>
  );
};


export default Header;