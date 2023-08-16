import { combineReducers } from 'redux';

import authReducer from './slices/userSlice'; 
import currencyReducer from './slices/currencySlice';

const rootReducer = combineReducers({
  auth: authReducer,
  currency: currencyReducer,
});

export default rootReducer;