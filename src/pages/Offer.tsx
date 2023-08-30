import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

import { RootState } from "../store";
import RentForm from "../components/forms/rent_form/RentForm";

import styles from "../styles/offer.module.scss";
import MoonSpin from "../components/load_spinners/MoonSpin";

const CarCard = lazy(() => import('../components/car_cards/СarCard'));


const Offer = () => {

  const cars = useSelector((state: RootState) => state.cars.cars);
  const { t } = useTranslation();
   
  return(
    <>
      <div className={styles.formContainer}>
        <RentForm />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>{t('Our offer')}</div>
        <div className={styles.cardContainer}>
          <Suspense fallback={<MoonSpin />}>
            {cars.map((car) => (
                <CarCard key={car.id} car={car} cardType="listCard" />
              ))}
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Offer;