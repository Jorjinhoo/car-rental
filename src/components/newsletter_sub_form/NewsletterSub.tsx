import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from "../../styles/newsletterSub.module.scss";

const NewsletterSub: FC = () => {

  const [inputValue, setInputValue] = useState<string>('');

  const { t } = useTranslation();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue('');
  };

  return(
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.header}>{t('Subscribe To Our Newsletter')}</div>
        <div className={styles.formItems}>
          <input
            type="email"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={t('Email Input')}
          />
          <button type="submit">{t('Subscribe')}</button>
        </div>
      </form>
    </div>
  );
}

export default NewsletterSub;