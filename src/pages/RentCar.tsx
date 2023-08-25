import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import RentForm from "../components/forms/rent_form/RentForm";

import CarDetailCard from "../components/car_cards/CarDetailCard";
import OrderForm from "../components/forms/order_form/OrderForm";

import styles from "../styles/selectedPeriod.module.scss";
import styles2 from "../styles/rentCar.module.scss";


const RentCar = () => {

  const { t } = useTranslation();

  const { id } = useParams();
  const carID = id ? +id : 1;

  return(
    <>
      <div className={styles2.rentForm}>
        <RentForm />
      </div>
      <div className={styles.container}>
        <CarDetailCard id={carID} />
        <div className={styles2.orderTitle}>{t('Reservation')}</div>
        <div className={styles2.orderForm}>
          <OrderForm id={carID} />
        </div>
      </div>
    </>
  )
}

export default RentCar;