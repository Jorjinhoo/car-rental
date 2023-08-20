import { FC } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
  name: string;
  control: any;
}

const DateSelector: FC<Props> = ({name, control}) => {

  const minPickupDate = new Date(); 

  return(
    <Controller
            name={name}
            control={control}
            rules={{ required: true }} 
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date: Date) => field.onChange(date)}
                dateFormat="yyyy-MM-dd"
                minDate={minPickupDate}
              />
            )}
          />
  )
}

export default DateSelector;