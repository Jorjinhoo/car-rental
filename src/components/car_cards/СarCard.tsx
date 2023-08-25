import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../store/index';
import { ICar } from '../../interfaces/ICar';

import styles from "../../styles/carCard.module.scss"


interface CarCardProps {
  car: ICar;
  cardType: string;
}

const CarCard: FC<CarCardProps> = ({ car, cardType }) => {

  const { t } = useTranslation();
  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency);

  const price = selectedCurrency === "USD" ? `${car.price} USD` : `${car.price * 4} PLN`;

  return (
    <div className={`${styles.card} ${ cardType === "listCard" && styles.card2}`}>
      <img className={styles.carImage} src={car.image} alt={`Car ${car.id}`} />
      <p className={styles.title}>{car.name}</p>
      <div className={styles.items}>
        <div className={styles.item}><div>{t('Engine: ')}</div>{car.engineType}</div>
        <div className={styles.item}><div>{t('Transmission: ')}</div>{car.transmission}</div>
        <div className={styles.item}><div>{t('Seats: ')}</div>{car.numberOfSeats}</div>
        <div className={styles.item}><div>{t('Power: ')}</div>{car.enginePower}</div>
        <div className={styles.item}><div>{t('Fuel Consumption: ')}</div>{car.burning}</div>
        {cardType === "listCard" && 
          (<>
            <div className={styles.item}><div>{t('Available from: ')}</div>{car.availability.from}</div>
            <div className={styles.item}><div>{t('Available to: ')}</div>{car.availability.to}</div>
            <div className={styles.item}><div>{t('Place: ')}</div>{car.place}</div>
          </>)
        }
      </div>
      <div className={styles.price}>{t('Price: ')}<div className={styles.amount}>{price}</div></div>
      <Link to={`/rentcar/${car.id}`} className={styles.selectBttn}>{t('Select')}</Link>
    </div>
  );
};

export default CarCard;