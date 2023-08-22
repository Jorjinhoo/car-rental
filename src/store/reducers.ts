import { combineReducers } from 'redux';

import authReducer from './slices/userSlice'; 
import currencyReducer from './slices/currencySlice';
import carReducer from './slices/carsSlice';
import rentFormDataReducer from './slices/rentFormDataSlice';
import orderFormReducer from './slices/orderFormSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  currency: currencyReducer,
  cars: carReducer,
  rentFormData: rentFormDataReducer,
  orderFormData: orderFormReducer
});

export default rootReducer;