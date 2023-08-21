import { FC } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { addDays, format } from 'date-fns';

import { AiOutlineCalendar } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/dateSelector.module.scss";

interface Props {
  name: string;
  control: any;
  firstSelectedDate: Date | null;
  secondSelectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  labelName: string;
}

const DateSelector: FC<Props> = ({name, control, firstSelectedDate, secondSelectedDate, setSelectedDate, labelName}) => {

  const minPickupDate = new Date();
  const tomorrowDate = addDays(minPickupDate, 1);

  const highlightedDates = firstSelectedDate !== null && secondSelectedDate !== null
  ? [firstSelectedDate, secondSelectedDate]
  : firstSelectedDate !== null
    ? [firstSelectedDate]
    : secondSelectedDate !== null
      ? [secondSelectedDate]
      : [];

  return(
    <div className={styles.container}>
      <div className={styles.label}>{labelName}</div>
      <AiOutlineCalendar className={styles.calendarIcon} />
      <Controller
            name={name}
            control={control}
            rules={{ required: true }} 
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                selected={field.value ? new Date(field.value) : (name === "pickupDate" ? minPickupDate : tomorrowDate)}
                onChange={(date: Date) => {
                  field.onChange(format(date, "yyyy-MM-dd"));
                  setSelectedDate(date);
                }}
                dateFormat="yyyy-MM-dd"
                minDate={minPickupDate}
                className={styles.dateInput}
                highlightDates={highlightedDates}
                startDate={firstSelectedDate}
                endDate={secondSelectedDate}
              />
            )}
          />
    </div>
  )
}

export default DateSelector;