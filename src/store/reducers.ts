import { combineReducers } from 'redux';
import authReducer from './slices/userSlice'; 

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;