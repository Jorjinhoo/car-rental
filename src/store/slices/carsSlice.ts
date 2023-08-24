import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../index';
import { ICar } from '../../interfaces/ICar';


interface CarsState {
  cars: ICar[];
}

const initialState: CarsState = {
  cars: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    loadCars: (state, action: PayloadAction<ICar[]>) => {
      state.cars = action.payload;
    },
  },
});

export const { loadCars } = carsSlice.actions;

export const selectCars = (state: RootState) => state.cars.cars;

export default carsSlice.reducer;
