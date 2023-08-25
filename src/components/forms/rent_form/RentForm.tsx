import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

import { setRentFormData } from "../../../store/slices/rentFormDataSlice";
import DateSelector from "../selectors/DateSelector";
import PlaceSelector from "../selectors/PlaceSelector";

import "react-datepicker/dist/react-datepicker.css";

import styles from "../../../styles/rentForm.module.scss";

interface IData {
  pickupPlace: { value: string; label: string };
  pickupDate: string | null;
  returnDate: string | null;
}

const RentForm = () => {

  const { t } = useTranslation();

  const { control, handleSubmit, formState: { errors } } = useForm<IData>();

  const [firstSelectedDate, setFirstSelectedDate] = useState<Date | null>(null);
  const [secondSelectedDate, setSecondSelectedDate] = useState<Date | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: IData) => {

    const dataToSend = {
      ...data,
      pickupPlace: data.pickupPlace.value,
    };
    
    dispatch(setRentFormData(dataToSend));
    navigate("/selectedperiod");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} id="reservationForm">
      <PlaceSelector control={control} placeholder={t('Pick-up place')} />
      {errors.pickupPlace && <span className={styles.error}>{t('This field is required')}</span>}
      <div className={styles.selectDate}>
        <DateSelector control={control} 
                      name={"pickupDate"} 
                      firstSelectedDate={firstSelectedDate} 
                      secondSelectedDate={secondSelectedDate} 
                      setSelectedDate={setFirstSelectedDate}
                      labelName={t('Pickup date')}
                      />
        {errors.pickupDate && <span className={styles.error}>{t('This field is required')}</span>}
      </div>
      <div className={styles.selectDate}>
        <DateSelector control={control} 
                      name={"returnDate"} 
                      firstSelectedDate={firstSelectedDate} 
                      secondSelectedDate={secondSelectedDate} 
                      setSelectedDate={setSecondSelectedDate}
                      labelName={t('Return date')}
                      />
        {errors.returnDate && <span className={styles.error}>{t('This field is required')}</span>}
      </div>
      <input className={styles.submit} value={t('Search')} type="submit" disabled={Object.keys(errors).length > 0} />
    </form>
  );
}

export default RentForm;