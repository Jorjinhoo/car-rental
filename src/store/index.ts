import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import { fetchCars } from "./actions/carsAction";
import { setUser } from "./slices/userSlice";


export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


store.dispatch(fetchCars());

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

let userFromLocalStorage = JSON.parse(localStorage.getItem('user') || 'null');
if (localStorage.getItem('user') === null) {
  userFromLocalStorage = null;
}
userFromLocalStorage && store.dispatch(setUser(userFromLocalStorage));


export default store;