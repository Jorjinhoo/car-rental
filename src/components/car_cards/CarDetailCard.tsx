import { FC } from "react";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '../../store/index';

import styles from "../../styles/carDetailCard.module.scss";

interface IProps {
  id: number;
}

const CarDetailCard: FC<IProps> = ({id}) => {

  const { t } = useTranslation();

  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency);
  const carsData = useSelector((state: RootState) => state.cars.cars);
  
  const selectedCar = carsData.find(car => car.id === id);
  if (!selectedCar) return <div>Car not found</div>;

  const price = selectedCurrency === "USD" ? `${selectedCar.price} USD` : `${selectedCar.price * 4} PLN`;

  return(
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.carIMG} src={selectedCar.image} alt={`Car ${selectedCar.id}`} />
        <div className={styles.carName}>{selectedCar.name}</div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <div className={styles.detailsTitle}>Specifications</div>
          <div className={styles.item}><div>{t('Seats: ')}</div>{selectedCar.numberOfSeats}</div>
          <div className={styles.item}><div>{t('Fuel Consumption: ')}</div>{selectedCar.burning}</div>
          <div className={styles.item}><div>{t('Power: ')}</div>{selectedCar.enginePower}</div>
          <div className={styles.item}><div>{t('Engine: ')}</div>{selectedCar.engineType}</div>
          <div className={styles.item}><div>{t('Transmission: ')}</div>{selectedCar.transmission}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsTitle}>Rental details</div>
          <div className={styles.item}><div>{t('available from: ')}</div>{selectedCar.availability.from}</div>
          <div className={styles.item}><div>{t('available to: ')}</div>{selectedCar.availability.to}</div>
          <div className={styles.item}><div>{t('place: ')}</div>{selectedCar.place}</div>
          <div className={styles.itemPrice}>{t('Price: ')}<div>{price}</div></div>
        </div>
      </div>
    </div>
  )
}

export default CarDetailCard;