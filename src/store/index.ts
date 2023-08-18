import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { fetchCars } from "./actions/carsAction";



export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;

store.dispatch(fetchCars());

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;