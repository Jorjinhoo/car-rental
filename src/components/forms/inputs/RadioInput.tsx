import { FC } from "react";
import { Controller } from "react-hook-form";

interface IProps {
  control: any;
  name: string;
  value: string;
  label: string;
}

const RadioInput: FC<IProps> = ({ control, name, value, label }) => {
  return (
    <div>
      <label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="radio"
              value={value}
            />
          )}
        />
        {label}
      </label>
    </div>
  );
};

export default RadioInput;