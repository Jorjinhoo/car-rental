import { useParams } from "react-router-dom";

import RentForm from "../components/forms/rent_form/RentForm";

import firstStyles from "../styles/selectedPeriod.module.scss";
import CarDetailCard from "../components/car_cards/CarDetailCard";
import OrderForm from "../components/forms/order_form/OrderForm";

const RentCar = () => {

  const { id } = useParams();
  const carID = id ? +id : 1;

  return(
    <div className={firstStyles.container}>
      <div className={firstStyles.rentForm}>
        <RentForm />
      </div>
      <CarDetailCard id={carID} />
      <OrderForm id={carID} />
    </div>
  )
}

export default RentCar;