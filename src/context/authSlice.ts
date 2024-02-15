import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthState {
  user: null | object;
  signed: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  signed: false,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: (_, { payload }: PayloadAction<object>) => {
      return {
        signed: true,
        user: payload,
      };
    },
    signOut: () => initialState,
  },
});

export default authSlice;
