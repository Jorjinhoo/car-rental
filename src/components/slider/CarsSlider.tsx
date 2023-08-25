import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/index';
import CarCard from '../car_cards/СarCard';

import styles from '../../styles/carsSlider.module.scss';

const CarsSlider = () => {
  const carsData = useSelector((state: RootState) => state.cars.cars);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [cardsToShow, setCardsToShow] = useState(4);
  
  const totalCars = carsData.length;

  const [startIndex, setStartIndex] = useState(0);
  const endIndex = (startIndex + cardsToShow - 1) % totalCars;

  const showPrevCards = useCallback(() => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? totalCars - 1 : prevIndex - 1
    );
  }, [totalCars]);

  const showNextCards = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCars);
  }, [totalCars]);

  const visibleCars = [];
  let currentIndex = startIndex;

  while (currentIndex !== endIndex) {
    visibleCars.push(carsData[currentIndex]);
    currentIndex = (currentIndex + 1) % totalCars;
  }
  visibleCars.push(carsData[endIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      showNextCards();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [startIndex, showNextCards]);



  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    switch (true) {
      case windowWidth < 600:
        setCardsToShow(1);
        break;
      case windowWidth < 800:
        setCardsToShow(2);
        break;
      case windowWidth < 1100:
        setCardsToShow(3);
        break;
      default:
        setCardsToShow(4);
    }
  }, [windowWidth]); 

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