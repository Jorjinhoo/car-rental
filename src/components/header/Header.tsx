import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DesctopNav from "./DesctopNav";
import MobileNav from "./MobileNav"; 
import useAuth from '../../hooks/use-auth';

import styles from "../../styles/header.module.scss";


const Header: FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const { isAuthenticated } = useAuth();
  const path = isAuthenticated ? "/authhome" : "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>

        <Link to={path} className={styles.logo}>FreeR</Link>
        {windowWidth <= 850 ? 
          <MobileNav isAuth={isAuthenticated} Scrolled={ scrolled } /> 
          : 
          <DesctopNav Scrolled={ scrolled } path={ path } isAuth={ isAuthenticated } />
          }
      </div>
    </div>
  );
};


export default Header;