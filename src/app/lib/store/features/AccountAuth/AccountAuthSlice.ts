// @ts-nocheck
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
// import { setCookie } from 'cookies-next'

import AccountAuthService from "./AccountAuthService";

interface AuthState {
  isLoggedIn: boolean;
  user: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

interface AxiosError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message: string;
}

interface UpdatePayload {
  id: number;
  accountData: AccountData;
}

interface UpdateResponse {
  id: number;
  data: AccountData;
}

export const TestF = createAsyncThunk("auth/test", async (_, thunkAPI) => {
  try {
    return await AccountAuthService.TestF();
  } catch (error) {
    const typedError = error as AxiosError;

    const message =
      (typedError.response &&
        typedError.response.data &&
        typedError.response.data.message) ||
      typedError.message ||
      typedError.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// Register  Account
export const register = createAsyncThunk(
  "auth/register",
  async (AccountData, thunkAPI) => {
    try {
      return await AccountAuthService.register(AccountData);
    } catch (error) {
      const typedError = error as AxiosError;

      const message =
        (typedError.response &&
          typedError.response.data &&
          typedError.response.data.message) ||
        typedError.message ||
        typedError.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export interface AccountData {
  email: string;
  password: string;
}

// Login Account
export const login = createAsyncThunk(
  "auth/login",
  async (AccountData: AccountData, thunkAPI) => {
    try {
      return await AccountAuthService.login(AccountData);
    } catch (error) {
      const typedError = error as AxiosError;

      const message =
        (typedError.response &&
          typedError.response.data &&
          typedError.response.data.message) ||
        typedError.message ||
        typedError.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// update account

export const updateAccount = createAsyncThunk<
  UpdateResponse,
  UpdatePayload,
  { rejectValue: string }
>("auth/update", async ({ id, accountData }, thunkAPI) => {
  try {
    console.log(
      "id ------------",
      id,
      "-----------------acc--------",
      accountData
    );
    const response = await AccountAuthService.updateAccount(id, accountData);

    return { id, data: response }; // Ensure AccountAuthService.updateAccount returns the appropriate type
  } catch (error) {
    const message =
      (error as any).response?.data?.message ||
      (error as any).message ||
      (error as any).toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const getAccountById = createAsyncThunk<
  UpdateResponse,
  UpdatePayload,
  { rejectValue: string }
>("auth/getAccount", async (id, thunkAPI) => {
  try {
    const response = await AccountAuthService.getAccount(id);

    return { id, data: response }; // Ensure AccountAuthService.updateAccount returns the appropriate type
  } catch (error) {
    const message =
      (error as any).response?.data?.message ||
      (error as any).message ||
      (error as any).toString();

    return thunkAPI.rejectWithValue(message);
  }
});

const AccountAuthSlice = createSlice({
  name: "Accountauth",
  initialState,
  reducers: {
    RESET_AUTH(state: AuthState) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      // register Account
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("registration successful");
      })
      .addCase(register.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.success(action.payload);
      })

      // testing
      .addCase(TestF.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(TestF.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("test successful");
      })
      .addCase(TestF.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.success(action.payload);
      })

      // login user
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;

        toast.success("Login successful");
        console.log("user logged in", action.payload);
      })
      .addCase(login.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.success(action.payload);
      })

      .addCase(getAccountById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAccountById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload?.data;
        console.log("🚀 ~ .addCase ~ action.payload:", action.payload);
      })
      .addCase(
        getAccountById.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
          toast.error(action.payload);
        }
      )

      // update
      .addCase(updateAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("Profile Updated Successfully");
      })
      .addCase(
        updateAccount.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
          toast.success(action.payload);
        }
      );
  },
});

export const { RESET_AUTH } = AccountAuthSlice.actions;

export default AccountAuthSlice.reducer;
