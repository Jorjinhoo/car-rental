import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';

import styles from "../../styles/carCard.module.scss"


interface Car {
  id: number;
  image: string;
  name: string;
  engineType: string;
  transmission: string;
  numberOfSeats: number;
  enginePower: string;
  burning: string;
  price: number;
}

interface CarCardProps {
  car: Car;
}

const CarCard: FC<CarCardProps> = ({ car }) => {

  const { t } = useTranslation();
  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency);

  const price = selectedCurrency === "USD" ? `${car.price} USD` : `${car.price * 4} PLN`;

  return (
    <div className={styles.card}>
      <img className={styles.carImage} src={car.image} alt={`Car ${car.id}`} />
      <p className={styles.title}>{car.name}</p>
      <div className={styles.items}>
        <div className={styles.item}><div>{t('Engine: ')}</div>{car.engineType}</div>
        <div className={styles.item}><div>{t('Transmission: ')}</div>{car.transmission}</div>
        <div className={styles.item}><div>{t('Seats: ')}</div>{car.numberOfSeats}</div>
        <div className={styles.item}><div>{t('Power: ')}</div>{car.enginePower}</div>
        <div className={styles.item}><div>{t('Fuel Consumption: ')}</div>{car.burning}</div>
      </div>
      <div className={styles.price}>{t('Price: ')}<div className={styles.amount}>{price}</div></div>
      <div className={styles.selectBttn}>{t('Select')}</div>
    </div>
  );
};

export default CarCard;