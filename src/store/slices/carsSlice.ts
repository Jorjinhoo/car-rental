import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface Car {
  id: number;
  image: string;
  name: string;
  engineType: string;
  transmission: string;
  numberOfSeats: number;
  enginePower: string;
  burning: string;
  price: number;
  availability: {
    from:string;
    to: string;
  }
}

interface CarsState {
  cars: Car[];
}

const initialState: CarsState = {
  cars: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    loadCars: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload;
    },
  },
});

export const { loadCars } = carsSlice.actions;

export const selectCars = (state: RootState) => state.cars.cars;

export default carsSlice.reducer;
