import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userInfo: {
    name: "",
    address: "",
    password: "",
    phoneNumber: "",
    email: "",
  },
  userDefault: {
    name: "John",
    address: "abcd",
    password: "abcd",
    phoneNumber: "123456",
    email: "john@gmail.com",
  },
};
const signUpSlice = createSlice({
  name: "user_slice",
  initialState,
  reducers: {
    getUserInfo: (state, { payload }) => {
      let cloneUserInfo = { ...payload };
      if (cloneUserInfo.name === "John") {
        cloneUserInfo = { ...state.userDefault };
      }
      state.userInfo = cloneUserInfo;
    },
    submitUser: (state, { payload }) => {
      let cloneUser = { ...payload };
      cloneUser = {
        name: "",
        address: "",
        password: "",
        phoneNumber: "",
        email: "",
      };
      state.userInfo = cloneUser;
    },
  },
});
export const { getUserInfo, submitUser } = signUpSlice.actions;
export default signUpSlice.reducer;
