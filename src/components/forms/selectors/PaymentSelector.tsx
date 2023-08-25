import { FC } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";


interface IProps {
  control: any;
  placeholder: string;
}

interface IPaymentOption {
  value: string;
  label: string;
}

const paymentOptions: IPaymentOption[] = [
  { value: "Card", label: "Credit Card" },
  { value: "Cash", label: "Cash" },
];

const mediaQueryStyles = {
  '@media screen and (max-width: 900px)': {
    width: '350px',
  },
};

const mediaQueryStyles2 = {
  '@media screen and (max-width: 400px)': {
    width: '250px',
  },
};

const PaymentSelector: FC<IProps> = ({control, placeholder}) => {


  return(
    <Controller
    name="paymentMethod"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
      <Select
        options={paymentOptions}
        {...field}
        placeholder={placeholder}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: '55px',
            width: '300px',
            borderRadius: '5px',
            marginRight: '5px',
            cursor: 'pointer',

            ...mediaQueryStyles,
            ...mediaQueryStyles2,
          }),
        }}
      />
    )}
  />
  )
}

export default PaymentSelector;