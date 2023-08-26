import { useTranslation } from 'react-i18next';

import GoogleMapComponent from "../components/google_map/GoogleMap";
import NewsletterSub from "../components/newsletter_sub_form/NewsletterSub";

import styles from "../styles/aboutUs.module.scss";


const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.headerBcgrnd}></div>
      <div className={styles.container}>
        <div className={styles.title}>{t('aboutUs.title')}</div>
        <section className={styles.section}>
        <span className={styles.textTitle}>
            {t('aboutUs.descriptionPart1')}<br />
            {t('aboutUs.descriptionPart2')}<br />
            {t('aboutUs.descriptionPart3')} <span className={styles.orangeText}>{t('aboutUs.descriptionPart4')}</span> {t('aboutUs.descriptionPart5')}<br />
            {t('aboutUs.descriptionPart6')}<br />
            {t('aboutUs.descriptionPart7')} <span className={styles.orangeText}>{t('aboutUs.descriptionPart8')}</span> {t('aboutUs.descriptionPart9')}<br />
            {t('aboutUs.descriptionPart10')} <span className={styles.orangeText}>{t('aboutUs.descriptionPart11')}</span>.<br />
          </span>
          <ul className={styles.infoList}>
            <li>{t('aboutUs.listItem1')}</li>
            <li>{t('aboutUs.listItem2')}</li>
            <li>{t('aboutUs.listItem3')}</li>
            <li>{t('aboutUs.listItem4')}</li>
            <li>{t('aboutUs.listItem5')}</li>
          </ul>
        </section>
        <section className={styles.section}>
          <NewsletterSub />
        </section>
        <div className={styles.title}>{t('aboutUs.ourLocation')}</div>
      </div>
      <GoogleMapComponent />
      <div className={styles.container}>
        <div className={styles.title}>{t('aboutUs.contactUs')}</div>
        <section className={`${styles.section} ${styles.contactSection}`}>
          <ul>
            <li>{t('aboutUs.tel')} <a href="tel:+48575456899">+48 575 456 899</a></li>
            <li>{t('aboutUs.email')} <a href="mailto:SokolovO@gmail.com">SokolovO@gmail.com</a></li>
            <li>{t('aboutUs.support')} <a href="mailto:Sokkollovv@gmail.com">Sokkollovv@gmail.com</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default AboutUs;