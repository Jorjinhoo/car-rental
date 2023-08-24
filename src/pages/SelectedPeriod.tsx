import { useSelector } from 'react-redux';

import { RootState } from '../store';
import RentForm from '../components/forms/rent_form/RentForm';
import CarCard from '../components/car_cards/СarCard';

import { ICar } from '../interfaces/ICar';

import styles from "../styles/selectedPeriod.module.scss";


interface ISelectedPeriod {
  pickupDate: string | null;
  pickupPlace: string | null;
  returnDate: string | null;
}


const SelectedPeriod = () => {

  const selectedPeriod = useSelector((state: RootState) => state.rentFormData.dataToSend);
  const cars = useSelector((state: RootState) => state.cars.cars);

  const filterCars = (cars: ICar[], selectedPeriod: ISelectedPeriod | null) => {
    if (!selectedPeriod || !selectedPeriod.pickupPlace || !selectedPeriod.returnDate) {
      return cars; 
    }

    return cars.filter((car) => {
      if (!selectedPeriod.pickupDate || selectedPeriod.pickupDate === null || selectedPeriod.returnDate === null) {
        return false; 
      }
      
      return (
        car.place === selectedPeriod.pickupPlace &&
        isWithinPeriod(car.availability.from, car.availability.to, selectedPeriod.pickupDate, selectedPeriod.returnDate)
      );
    });
  };

  const isWithinPeriod = (
    carFrom: string,
    carTo: string,
    pickupDate: string,
    returnDate: string
  ) => {
    if (!pickupDate || !returnDate) {
      return false; 
    }

    const carFromDate = new Date(carFrom);
    const carToDate = new Date(carTo);
    const pickupDateObj = new Date(pickupDate);
    const returnDateObj = new Date(returnDate);

    return pickupDateObj >= carFromDate && returnDateObj <= carToDate;
  };

  const filteredCars = filterCars(cars, selectedPeriod);

  return(
    <>
      <div className={styles.rentForm}>
          <RentForm />
        </div>
      <div className={styles.container}>
        <div className={styles.header}>SEARCHING RESULTS</div>
        <section className={styles.cardsContainer}>
          {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} cardType="listCard" />
            ))}
        </section>
      </div>
    </>
  )
}

export default SelectedPeriod;