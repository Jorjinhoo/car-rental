import { combineReducers } from 'redux';

import authReducer from './slices/userSlice'; 
import currencyReducer from './slices/currencySlice';
import carReducer from './slices/carsSlice';
import rentFormDataReducer from './slices/rentFormDataSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  currency: currencyReducer,
  cars: carReducer,
  rentFormData: rentFormDataReducer
});

export default rootReducer;