import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRegister, fetchUserData, getUserData } from './asyncActions';
import { AuthSliceState, Status } from './types';

const initialState: AuthSliceState = {
  data: null,
  status: Status.LOADING,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.data = null;
    }
  },

  extraReducers: (builder) => {
    //login
    builder.addCase(fetchUserData.pending, (state) => {
      state.status = Status.LOADING;
    })

    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    })

    builder.addCase(fetchUserData.rejected, (state) => {
      state.data = null;
      state.status = Status.ERROR;
    })

    //get user
    builder.addCase(getUserData.pending, (state) => {
      state.status = Status.LOADING;
    })

    builder.addCase(getUserData.fulfilled, (state) => {
      state.status = Status.SUCCESS;
    })

    builder.addCase(getUserData.rejected, (state) => {
      state.status = Status.ERROR;
    })
    
    //register
    builder.addCase(fetchRegister.pending, (state) => {
      state.status = Status.LOADING;
    })

    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    })

    builder.addCase(fetchRegister.rejected, (state) => {
      state.data = null;
      state.status = Status.ERROR;
    })
  }
});

export const {logOut} = authSlice.actions;

export const selectIsAuth = (state: any) => Boolean(state.auth.data)

export default authSlice.reducer;
