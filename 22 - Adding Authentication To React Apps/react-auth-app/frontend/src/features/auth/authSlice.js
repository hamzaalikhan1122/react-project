import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAuth } from "./authApi";

const initialState = {
  status: "idle",
  resData: [],
  isAuthorized: false,
  isLoading: false,
  errors: null,
};

export const fetchAuthAsync = createAsyncThunk(
  "auth/fetchAuth",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetchAuth(data);
      const responseData = await response.json(); // Ensure you're parsing the JSON body
      if (!response.ok) {
        // If response is not OK, we assume it's an error and reject it properly
        return rejectWithValue(responseData);
      }
      // if(response.status === 422 || response.status === 401){

      // }
      return responseData; // For successful responses
    } catch (error) {
      // For network errors or failure to parse the response
      return rejectWithValue(error.toString());
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuthorized = false;
      state.resData = [];
    },
    replaceToken: (state, action) => {
      if (state.resData.length === 0) {
        state.resData = { token: action.payload };
      }
      state.isAuthorized = true;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthAsync.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchAuthAsync.fulfilled, (state, action) => {
        state.status = "success";
        // Assuming successful response structure has data needed
        state.isAuthorized = true; // Update based on your success condition
        state.resData = action.payload; // Store the successful response
        state.errors = null;
      })
      .addCase(fetchAuthAsync.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.payload;
      });
  },
});

export const { logOut, replaceToken } = authSlice.actions;
export const selectAuthData = (state) => state.auth;

export default authSlice.reducer;
