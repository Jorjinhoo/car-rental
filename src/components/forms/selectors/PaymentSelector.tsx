import { FC } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";


interface IProps {
  control: any;
}

interface IPaymentOption {
  value: string;
  label: string;
}

const paymentOptions: IPaymentOption[] = [
  { value: "Card", label: "Credit Card" },
  { value: "Cash", label: "Cash" },
];

const PaymentSelector: FC<IProps> = ({control}) => {

  return(
    <Controller
    name="paymentMethod"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
      <Select
        options={paymentOptions}
        {...field}
        placeholder="Pick-up payment method"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: '55px',
            width: '300px',
            borderRadius: '5px',
            marginRight: '5px',
            cursor: 'pointer',
          }),
        }}
      />
    )}
  />
  )
}

export default PaymentSelector;