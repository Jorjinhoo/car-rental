import { FC } from "react";
import { Controller } from "react-hook-form";

import styles from "../../../styles/radioInput.module.scss";

interface IProps {
  control: any;
  name: string;
  value: string;
  label: string;
}

const RadioInput: FC<IProps> = ({ control, name, value, label }) => {
  return (
    <div className={styles.container}>
      <label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="radio"
              value={value}
              className={styles.input}
            />
          )}
        />
        {label}
      </label>
    </div>
  );
};

export default RadioInput;