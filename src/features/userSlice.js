import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "email",
  initialState: {
    email: null,
  },
  reducers: {
    loGin: (state, action) => {
      state.email = action.payload;
    },
    loGout: (state) => {
      state.email = null;
    },
  },
});

export const { loGin, loGout } = userSlice.actions;
export const selectUser = (state) => state.user.email;
export default userSlice.reducer;
