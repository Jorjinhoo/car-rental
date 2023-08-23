import { useTranslation } from 'react-i18next';

import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";
import { LiaCcVisa } from "react-icons/lia";
import { BiLogoMastercard } from "react-icons/bi";
import { BiLogoPaypal } from "react-icons/bi";

import styles from "../../styles/footer.module.scss";

const Footer = () => {

  const { t } = useTranslation();

  return(
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.infoFull}>
            <div className={styles.infoLogo}>FreeR</div>
            <div className={styles.infoCopyright}>© 2019-2023 Sokolov O</div>
          </div>
          <div className={styles.infoList}>
            <ul>
              <li>{t('Contacts')}</li>
              <li>{t('Documents')}</li>
              <li>{t('Help')}</li>
            </ul>
            <ul>
              <li>{t('About Us')}</li>
              <li>{t('Car Types')}</li>
            </ul>
          </div>
        </div>
        <div className={styles.iconsContainer} >
          <div className={styles.icons}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <TiSocialFacebook className={styles.icon} />
            </a>
            <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">
              <RiTelegramLine className={styles.icon} />
            </a>
           </div>
          <div className={styles.icons}>
            <LiaCcVisa className={`${styles.icon} ${styles.iconSeconds}`} />
            <BiLogoMastercard className={`${styles.icon} ${styles.iconSeconds}`} />
            <BiLogoPaypal className={`${styles.icon} ${styles.iconSeconds}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;