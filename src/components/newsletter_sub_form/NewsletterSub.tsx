import { useState, ChangeEvent, FormEvent, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setSubscribe } from '../../store/slices/SubscribeMailSlice';
import { RootState } from "../../store/index";

import styles from "../../styles/newsletterSub.module.scss";

const NewsletterSub: FC = () => {

  const [inputValue, setInputValue] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isSubscribed = useSelector((state: RootState) => state.setMail.subscribe);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue('');
    dispatch(setSubscribe(true));
    setShowMessage(true);

   
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  useEffect(() => {
    if (isSubscribed) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [isSubscribed]);
  
  return (
    <div className={styles.container}>
        {showMessage ? (
          <div className={styles.isSubscribed}>
            <p>Thank you for subscribing to our updates!</p>
            <p>Now, the most up-to-date information will be sent to the provided email</p>
          </div>
          ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
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
        )}
    </div>
  );
}

export default NewsletterSub;