
import { useSelector } from 'react-redux';

import { RootState } from '../../store/index';

import styles from "../../styles/lastOrderCard.module.scss";

const LastOrderCard = () => {

  const lastOrder = useSelector((state: RootState) => state.orderFormData);
  const carsData = useSelector((state: RootState) => state.cars.cars);
  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency);
  
  const selectedCar = carsData.find(car => car.id === lastOrder.carID);
  if (!selectedCar) return <div className={`${styles.card} ${styles.card2}`}><div>No orders yet</div></div>;


  const price = selectedCurrency === "USD" ? selectedCar.price : selectedCar.price * 4;

    const pickupDate = lastOrder.pickupDate ? new Date(lastOrder.pickupDate) : null;
    const returnDate = lastOrder.returnDate ? new Date(lastOrder.returnDate) : null;

    let totalPrice: number = 0;

    if (pickupDate && returnDate) {

      const timeDifference = returnDate.getTime() - pickupDate.getTime(); 
      totalPrice = (timeDifference / (1000 * 60 * 60 * 24)) * price; 
    } 
 
  return (
    <div className={styles.card}>
      <img className={styles.carIMG} src={selectedCar?.image} alt=''/>
      <div className={styles.carName}>{selectedCar?.name}</div>
      <div className={styles.orderData}>
        <div className={styles.item}><div>From:</div>{lastOrder.pickupDate}</div>
        <div className={styles.item}><div>To:</div>{lastOrder.returnDate}</div>
        <div className={styles.item}><div>Payment:</div>{lastOrder.paymentMethod}</div>
      </div>
      <div className={styles.totalPrice}><div>Total </div>{totalPrice} {selectedCurrency === "USD" ? "USD" : "PLN"}</div>
    </div>
  );
};


export default LastOrderCard;