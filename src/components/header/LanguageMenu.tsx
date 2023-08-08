import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

import styles from "../../styles/desctopNav.module.scss";
import stylesMenu from "../../styles/languageMenu.module.scss";

const LanguageMenu = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ENG");
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);

  const languageMenuRef = useRef<HTMLDivElement | null>(null);

  const { i18n } = useTranslation();

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.toLowerCase());
    setLanguageMenuOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      languageMenuRef.current &&
      !languageMenuRef.current.contains(event.target as Node)
    ) {
      setLanguageMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`${styles.item} ${styles.languageMenu}`}
      onClick={toggleLanguageMenu}
      ref={languageMenuRef}
    >
      {isLanguageMenuOpen ? (
        <div className={stylesMenu.languageMenuDropdown}>
          <div
            className={stylesMenu.languageOption}
            onClick={() => selectLanguage("ENG")}
          >
            ENG
          </div>
          <div
            className={stylesMenu.languageOption}
            onClick={() => selectLanguage("PL")}
          >
            PL
          </div>
        </div>
      ) : (
        <div className={stylesMenu.selectedLanguage}>{selectedLanguage}</div>
      )}
    </div>
  );
};

export default LanguageMenu;