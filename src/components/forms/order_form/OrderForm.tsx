import { FC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setOrderData } from "../../../store/slices/orderFormSlice";
import { RootState } from "../../../store";
import DateSelector from "../selectors/DateSelector";
import useAuth from "../../../hooks/use-auth";

import PaymentSelector from "../selectors/PaymentSelector";
import Input from "../inputs/Input";
import RadioInput from "../inputs/RadioInput";

import styles from "../../../styles/dateSelector.module.scss";
import styles2 from "../../../styles/orderForm.module.scss";


interface IData {
  carID: number | null;
  pickupDate: string | null;
  returnDate: string | null;
  paymentMethod: { value: string; label: string };
}

interface IProps {
  id: number;
}

const OrderForm: FC<IProps> = ({id}) => {

  const carsData = useSelector((state: RootState) => state.cars.cars);
  const { control, handleSubmit, formState: { errors } } = useForm<IData>();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstSelectedDate, setFirstSelectedDate] = useState<Date | null>(null);
  const [secondSelectedDate, setSecondSelectedDate] = useState<Date | null>(null);
  
  const selectedCar = carsData.find(car => car.id === id);
  if (!selectedCar) return <div>Car not found</div>;

  
  const onSubmit = (data: IData) => {

    const formData = {
      carID: id,
      pickupDate: data.pickupDate || "",
      returnDate: data.returnDate || "",
      paymentMethod: data.paymentMethod.value,
    };

    dispatch(setOrderData(formData));
    isAuthenticated ? navigate("/authhome") : navigate("/");
  };

  return(
    <form onSubmit={handleSubmit(onSubmit)} className={styles2.form} id="reservationForm">
      <div className={styles2.dateSelectors}>
        <div className={styles.selectDate}>
          <DateSelector control={control} 
                        name={"pickupDate"} 
                        firstSelectedDate={firstSelectedDate} 
                        secondSelectedDate={secondSelectedDate} 
                        setSelectedDate={setFirstSelectedDate}
                        labelName={"Pickup date"}
                        minDate={selectedCar.availability.from}
                        maxDate={selectedCar.availability.to}
                        />
          {errors.pickupDate && <span className={styles.error}>This field is required</span>}
        </div>
        <div className={styles.selectDate}>
          <DateSelector control={control} 
                        name={"returnDate"} 
                        firstSelectedDate={firstSelectedDate} 
                        secondSelectedDate={secondSelectedDate} 
                        setSelectedDate={setSecondSelectedDate}
                        labelName={"Return date"}
                        minDate={selectedCar.availability.from}
                        maxDate={selectedCar.availability.to}
                        />
          {errors.returnDate && <span className={styles.error}>This field is required</span>}
        </div>
      </div>
      {
        !isAuthenticated &&
          <div className={styles2.inputs}>
            <div className={styles2.input}><Input control={control} name="Name" placeholder="Name" maxLenght={60} /></div>
            <div className={styles2.input}><Input control={control} name="Surname" placeholder="Surname" maxLenght={60} /></div>
            <div className={styles2.radioInput}><RadioInput control={control} name="drivingExperience" value="Yes" label="My driving experience exceeds 2 years" /></div>
            <div className={styles2.input}><Input control={control} name="TelNumber" placeholder="Contact Number" minLength={9} maxLenght={11} pattern='[0-9]+' /></div>
          </div>
      }
      <div className={styles2.paymentSelector}>
        <PaymentSelector control={control} />
      </div>
      <input className={styles2.submit} value="Order" type="submit" disabled={Object.keys(errors).length > 0} />
    </form>
  )
}

export default OrderForm;