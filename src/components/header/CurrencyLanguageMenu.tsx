import { useState, useEffect, useRef, FC } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";

import { setCurrency } from "../../store/slices/currencySlice";

import styles from "../../styles/desctopNav.module.scss";
import stylesMenu from "../../styles/languageMenu.module.scss";

interface MenuType {
  menuType: string
}

const LanguageOrCurrencyMenu: FC<MenuType> = ({menuType}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ENG");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");

  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.toLowerCase());
    setMenuOpen(false);
  };

  const selectCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    dispatch(setCurrency(currency));
    setMenuOpen(false);
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleMenuOption = (language: string, currency: string) => {
    if(menuType === "Lan") {
      selectLanguage(language);
    } else if(menuType === "Cur") {
        selectCurrency(currency);
    }
  }
  

  return (
    <div
      className={`${styles.item} ${styles.languageMenu}`}
      onClick={toggleMenu}
      ref={menuRef}
    >
      {isMenuOpen ? (
        <div className={stylesMenu.languageMenuDropdown}>
          <div
            className={stylesMenu.languageOption}
            onClick={() => handleMenuOption("ENG", "USD")}
          >
            {menuType === "Lan" ? "ENG" : "USD"}
          </div>
          <div
            className={stylesMenu.languageOption}
            onClick={() => handleMenuOption("PL", "PLN")}
          >
            {menuType === "Lan" ? "PL" : "PLN"}
          </div>
        </div>
      ) : (
        <div className={stylesMenu.selectedLanguage}>{menuType === "Lan" ? selectedLanguage : selectedCurrency}</div>
      )}
    </div>
  );
};

export default LanguageOrCurrencyMenu;