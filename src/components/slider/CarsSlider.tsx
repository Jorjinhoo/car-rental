import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/index';
import CarCard from './СarCard';

import styles from '../../styles/carsSlider.module.scss';

const CarsSlider = () => {
  const carsData = useSelector((state: RootState) => state.cars.cars);
  const cardsToShow = 4;
  const totalCars = carsData.length;

  const [startIndex, setStartIndex] = useState(0);
  const endIndex = (startIndex + cardsToShow - 1) % totalCars;

  const showPrevCards = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? totalCars - 1 : prevIndex - 1
    );
  };

  const showNextCards = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCars);
  };

  const visibleCars = [];
  let currentIndex = startIndex;

  while (currentIndex !== endIndex) {
    visibleCars.push(carsData[currentIndex]);
    currentIndex = (currentIndex + 1) % totalCars;
  }
  visibleCars.push(carsData[endIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.sliderBttn} onClick={showPrevCards}>
        &lt;
      </div>
      <div className={styles.cardContainer}>
        {visibleCars.map((car) => (
          <CarCard key={car.id} car={car} cardType={"homeSlider"} />
        ))}
      </div>
      <div className={styles.sliderBttn} onClick={showNextCards}>
        &gt;
      </div>
    </div>
  );
};

export default CarsSlider;