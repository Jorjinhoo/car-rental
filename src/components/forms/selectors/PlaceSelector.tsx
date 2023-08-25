import { FC } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";


interface Props {
  control: any;
  placeholder: string;
}

interface PlaceOption {
  value: string;
  label: string;
}

const placeOptions: PlaceOption[] = [
  { value: "City, Random Street 2, 01-110", label: "City, Random Street 2, 01-110" },
  { value: "City, Random Street 3, 03-53", label: "City, Random Street 3, 03-53" },
  { value: "City, Random Street 5, 01-55", label: "City, Random Street 5, 01-55" },
  { value: "City, Random Street 1, 01-54", label: "City, Random Street 1, 01-54" },
  { value: "City, Random Street 4, 38", label: "City, Random Street 4, 38" },
];

const PlaceSelector: FC<Props> = ({control, placeholder}) => {

  const mediaQueryStyles = {
    '@media screen and (max-width: 1400px)': {
      height: '55px',
      width: '350px',
    },
  };

  const mediaQueryStyles2 = {
    '@media screen and (max-width: 400px)': {
      height: '55px',
      width: '250px',
    },
  };

  return(
    <Controller
    name="pickupPlace"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
      <Select
        options={placeOptions}
        {...field}
        placeholder={placeholder}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: '65px',
            width: '500px',
            borderRadius: '5px',
            marginRight: '5px',
            cursor: 'pointer',

            ...mediaQueryStyles,
            ...mediaQueryStyles2,
          }),
          option: (provided, state) => ({
            ...provided,
            zIndex: '5',
          
          }),
        }}
      />
    )}
  />
  )
}

export default PlaceSelector;