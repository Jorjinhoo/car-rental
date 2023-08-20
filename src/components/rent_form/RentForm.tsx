import { useForm } from "react-hook-form";

import DateSelector from "./DateSelector";
import PlaceSelector from "./PlaceSelector";

import "react-datepicker/dist/react-datepicker.css";

import styles from "../../styles/rentForm.module.scss";

interface IData {
  pickupPlace: string;
  pickupDate: Date | null;
  returnDate: Date | null;
}

const RentForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IData>();

  const onSubmit = (data: IData) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} id="reservationForm">
        <div className={styles.selectPlace}>
          <div className={styles.label}>Pick-up place</div>
          <PlaceSelector control={control} />
          {errors.pickupPlace && <span className={styles.error}>This field is required</span>}
        </div>
        <div className={styles.selectPDate}>
          <div className={styles.label}>Дата получения</div>
          <DateSelector control={control} name={"pickupDate"} />
          {errors.pickupDate && <span className={styles.error}>This field is required</span>}
        </div>
        <div className={styles.selectRDate}>
          <div className={styles.label}>Дата возврата</div>
          <DateSelector control={control} name={"returnDate"}/>
          {errors.returnDate && <span className={styles.error}>This field is required</span>}
        </div>
        <input type="submit" disabled={Object.keys(errors).length > 0} />
      </form>
    </div>
  );
}

export default RentForm;