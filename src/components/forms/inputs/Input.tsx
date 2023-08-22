import { FC } from "react";
import { Controller } from "react-hook-form";

interface IProps {
  control: any;
  name: string;
  placeholder: string;
  minLength?: number;
  maxLenght?: number;
  pattern?: string;
}

const Input: FC<IProps> = ({control, name, placeholder, minLength, maxLenght, pattern}) => {
  
  const minL = minLength ? minLength : undefined;
  const maxL = maxLenght ? maxLenght : undefined;
  const pat = pattern ? pattern : undefined;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <input
          {...field}
          type="text"
          placeholder={placeholder}
          required={true}
          minLength={minL}
          maxLength={maxL}
          pattern={pat}
        />
      )}
    />
  );
};

export default Input;