import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userLoginInterface, userSignUpInterface, userStateInterface } from './types';
import { loginApi, refreshTokenApi, signupApi } from './userApi';
import { setValue, removeValue } from '../../utils/cookies';

export const signup = createAsyncThunk<
  userSignUpInterface,
  {
    email: string;
    password: string;
    token_expires_in: string | undefined;
  },
  { rejectValue: string }
>('user/signup', async (params, thunkAPI) => {
  const { email, password, token_expires_in } = params;

  try {
    const data = await signupApi(email, password, token_expires_in ?? '');
    await setValue('accessToken', data.accessToken, 30);
    await setValue('refreshToken', data.refreshToken, 30);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk<
  userLoginInterface,
  {
    email: string;
    password: string;
    token_expires_in: string | undefined;
  },
  { rejectValue: string }
>('user/login', async (params, thunkAPI) => {
  const { email, password, token_expires_in } = params;

  try {
    const data = await loginApi(email, password, token_expires_in ?? '');
    await setValue('accessToken', data.accessToken, 30);
    await setValue('refreshToken', data.refreshToken, 30);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshToken = createAsyncThunk<
  userLoginInterface,
  {
    token: string;
    token_expires_in: string | undefined;
  },
  { rejectValue: string }
>('user/refreshToken', async (params, thunkAPI) => {
  const { token, token_expires_in } = params;

  try {
    const data = await refreshTokenApi(token, token_expires_in ?? '');
    await setValue('accessToken', data.accessToken, 30);
    await setValue('refreshToken', data.refreshToken, 30);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = () => async (dispatch: any) => {
  try {
    // Clear user data from cookies or AsyncStorage
    await removeValue('accessToken');
    await removeValue('refreshToken');
    // Dispatch action to clear state
    dispatch(userAuthSlice.actions.clearUserData());
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

const initialState: userStateInterface = {
  message: '',
  accessToken: '',
  refreshToken: '',
  loading: false,
  error: null,
};

const userAuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearUserData: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(signup.fulfilled, (state, action: any) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.message = action.payload.message;
        state.loading = false;
        state.error = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || true;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action: any) => {
        state.accessToken = action.payload.accessToken;
        state.loading = false;
        state.error = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || true;
      })
      .addCase(refreshToken.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(refreshToken.fulfilled, (state, action: any) => {
        state.accessToken = action.payload.accessToken;
        state.loading = false;
        state.error = false;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || true;
      });
  },
});

export default userAuthSlice.reducer;
export const { setAccessToken, clearUserData } = userAuthSlice.actions;
