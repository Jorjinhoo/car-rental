import { useParams } from "react-router-dom";

import RentForm from "../components/forms/rent_form/RentForm";

import CarDetailCard from "../components/car_cards/CarDetailCard";
import OrderForm from "../components/forms/order_form/OrderForm";

import styles from "../styles/selectedPeriod.module.scss";
import styles2 from "../styles/rentCar.module.scss";


const RentCar = () => {

  const { id } = useParams();
  const carID = id ? +id : 1;

  return(
    <div className={styles.container}>
      <div className={styles.rentForm}>
        <RentForm />
      </div>
      <CarDetailCard id={carID} />
      <div className={styles2.orderTitle}>RESERVATION</div>
      <div className={styles2.orderForm}>
        <OrderForm id={carID} />
      </div>
    </div>
  )
}

export default RentCar;