import React, {useState} from "react";

import styles from "../../styles/desctopNav.module.scss"
import stylesMenu from "../../styles/languageMenu.module.scss"



const LanguageMenu = () => {

  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('ENG');

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setLanguageMenuOpen(false);
  };

  return(
    <div className={`${styles.item} ${styles.languageMenu}`} onClick={toggleLanguageMenu}>
      {isLanguageMenuOpen ? (
        <div className={stylesMenu.languageMenuDropdown}>
          <div className={stylesMenu.languageOption} onClick={() => selectLanguage('ENG')}>ENG</div>
          <div className={stylesMenu.languageOption} onClick={() => selectLanguage('PL')}>PL</div>
        </div>
      ) : (
        <div className={stylesMenu.selectedLanguage}>{selectedLanguage}</div>
      )}
    </div>
  )
}

export default LanguageMenu;