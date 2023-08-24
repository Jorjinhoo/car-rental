import { useSelector } from "react-redux";

import { RootState } from "../store";
import CarCard from "../components/car_cards/СarCard";

import styles from "../styles/offer.module.scss";
import RentForm from "../components/forms/rent_form/RentForm";

const Offer = () => {

  const cars = useSelector((state: RootState) => state.cars.cars);
   
  return(
    <>
      <div className={styles.formContainer}>
        <RentForm />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Our offer</div>
        <div className={styles.cardContainer}>
          {cars.map((car) => (
              <CarCard key={car.id} car={car} cardType="listCard" />
            ))}
        </div>
      </div>
    </>
  )
}

export default Offer;