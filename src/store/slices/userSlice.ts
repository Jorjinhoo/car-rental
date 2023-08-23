import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
  name: 'auth',
  initialState: { 
    user: false,
    userDetails: {
      displayName: null,
      email: null,
      uid: null,
      photoURL: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = true;;
      state.userDetails.displayName = action.payload.displayName;
      state.userDetails.email = action.payload.email;
      state.userDetails.uid = action.payload.uid;
      state.userDetails.photoURL = action.payload.photoURL;
    },
    clearUser: (state) => {
      state.user = false;
      state.userDetails.displayName = null;
      state.userDetails.email = null;
      state.userDetails.uid = null;
      state.userDetails.photoURL = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;