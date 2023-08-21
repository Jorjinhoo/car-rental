import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IRentFormData {
  pickupPlace: string;
  pickupDate: string | null;
  returnDate: string | null;
}

interface RentFormState {
  dataToSend: IRentFormData | null;
}

const initialState: RentFormState = {
  dataToSend: null,
};

const rentFormDataSlice = createSlice({
  name: "rentForm",
  initialState,
  reducers: {
    setRentFormData: (state, action: PayloadAction<IRentFormData | null>) => {
      state.dataToSend = action.payload;
    },
  },
});

export const { setRentFormData } = rentFormDataSlice.actions;
export default rentFormDataSlice.reducer;