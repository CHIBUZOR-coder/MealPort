import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // Register states
  isLoading: false,
  error: "",
  userData: [],
  modalVisible: false,

  // verification states
  verificationData: [],
  verifyLoading: false,
  verifyModal: false,
  verifyError: "",

  //login states
  logLoading: false,
  loggedData: [],
  logError: "",
  token: "",
  decoded: "",
  logModalVisible: false,
  expiresAt: "",
  userInfo: {},
};

export const RegisterUser = createAsyncThunk(
  "user/register",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/registerUser", {
        method: "POST",
        "Content-Type": "multipart/form-data",
        body: formData,
      });
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const VerifyUser = createAsyncThunk(
  "user/verification",
  async (token, { rejectWithValue }) => {
    try {
      const res = await fetch("http://192.168.33.142:5000/verifyEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.log("data not ok:", data);
        return rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const LoginUser = createAsyncThunk(
  "user/login",
  async (logvalue, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logvalue),
      });

      const data = await res.json();

      if (!res.ok) {
        // backend responded with 400 or 500, send rejection
        return rejectWithValue(data.message || "Login failed");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    hideModal(state) {
      state.modalVisible = false;
    },
    hideVerrifyModal(state) {
      state.verifyModal = false;
    },
    hideLogModal(state) {
      state.logModalVisible = false;
    },
    SetDedodedToken(state, action) {
      state.decoded = action.payload;
    },
    SeUserInfo(state, action) {
      state.userInfo = action?.payload
    },
    setTokenExpiry(state, action) {
      state.expiresAt = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.modalVisible = true;
        state.userData = action.payload;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.userData = [];
        state.isLoading = false;
        state.modalVisible = true;
        state.error = action.payload;
      })
      .addCase(VerifyUser.pending, (state) => {
        state.verifyLoading = true;
      })
      .addCase(VerifyUser.fulfilled, (state, action) => {
        state.verifyLoading = false;
        state.verificationData = action.payload;
        state.verifyModal = true;
        state.verifyError = "";
      })
      .addCase(VerifyUser.rejected, (state, action) => {
        state.verifyLoading = false;
        state.error = action.payload;
        state.verifyModal = true;
        state.verifyError = action.payload;
      })
      .addCase(LoginUser.pending, (state) => {
        state.logLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.logLoading = false;
        state.logModalVisible = true;
        state.loggedData = action.payload;
        state.token = action?.payload?.token;
        state.error = "";
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.logLoading = false;
        state.logModalVisible = true;
        state.loggedData = [];
        state.logError = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
