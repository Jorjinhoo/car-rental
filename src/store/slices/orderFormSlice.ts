import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  carID: number | null;
  pickupDate: string | null;
  returnDate: string | null;
  paymentMethod: string | null;
}

const initialState: OrderState = {
  carID: null,
  pickupDate: null,
  returnDate: null,
  paymentMethod: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderData: (state, action: PayloadAction<OrderState>) => {
      return { ...state, ...action.payload };
    },
    resetOrder: (state) => {
      return initialState;
    },
  },
});

export const { setOrderData, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;