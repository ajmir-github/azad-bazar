import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const localTheme = {
  key: "theme",
  defaultTheme: "light",
  get() {
    return localStorage.getItem(this.key) || this.defaultTheme;
  },
  set(theme: string) {
    localStorage.setItem(this.key, theme);
  },
};

// Define a type for the slice state
interface UiState {
  theme: string;
}

// Define the initial state using that type
const initialState: UiState = {
  theme: localTheme.get(),
};

export const uiSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export default uiSlice;
