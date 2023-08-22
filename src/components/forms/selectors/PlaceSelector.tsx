import { FC } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";


interface Props {
  control: any;
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

const PlaceSelector: FC<Props> = ({control}) => {

  return(
    <Controller
    name="pickupPlace"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
      <Select
        options={placeOptions}
        {...field}
        placeholder="Pick-up place"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: '65px',
            width: '500px',
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

export default PlaceSelector;