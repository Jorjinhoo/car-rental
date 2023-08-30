import { createSlice } from "@reduxjs/toolkit";

const SubscribeMailSlice = createSlice({
  name: "submail",
  initialState: {
    subscribe: false,
  },
  reducers: {
    setSubscribe: (state, action) => {
      state.subscribe = action.payload;
    }
  }
})

export const {setSubscribe} = SubscribeMailSlice.actions;
export default SubscribeMailSlice.reducer;