
import { loadCars } from '../slices/carsSlice';
import jsonData from '../../db/db-cars.json'; 
import { Dispatch } from 'redux';

export const fetchCars = () => async (dispatch: Dispatch) => {
  const carsData = jsonData.cars;
  dispatch(loadCars(carsData));
};