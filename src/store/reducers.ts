import { combineReducers } from 'redux';

import authReducer from './slices/userSlice'; 
import currencyReducer from './slices/currencySlice';
import carReducer from './slices/carsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  currency: currencyReducer,
  cars: carReducer,
});

export default rootReducer;