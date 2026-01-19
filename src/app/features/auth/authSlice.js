import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(window.sessionStorage.getItem('admin_data')) || JSON.parse(window.sessionStorage.getItem('judge_data')) || { username: '', roles: [], isAuthenticated: false, jid: '' }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.username = action.payload.username;
      state.roles = action.payload.roles;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.jid = action.payload?.jid;
      state.jid ? window.sessionStorage.setItem("judge_data", JSON.stringify(state)) : window.sessionStorage.setItem("admin_data", JSON.stringify(state));
    },
    resetAuthState() {
      window.sessionStorage.removeItem("admin_data");
      window.sessionStorage.removeItem("judge_data");
      return initialState;
    }
  },
})

export const { setLogin, resetAuthState } = authSlice.actions

export default authSlice.reducer