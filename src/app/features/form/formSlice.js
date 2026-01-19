import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    step1: {
        title: "",
        domain: "",
        project_type: "",
        guide_name: "",
        guide_email: "",
        guide_phone: "",
        hod_email: "",
        sponsored: "0",
        company: "",
        abstract: "",
        nda: "0",
        demo: "1",
        techfiesta: "0",
        team_id: "",
        reason_of_demo: "",
    },
    step2: Array(),
    step3: {
      isPICT: null,
      college: "",
      country: "",
      state: "",
      city: "",
      district: "",
      locality: "1",
      mode: "1",
      reason_of_mode: "",
      isInternational: null,
      year: "",
      referral: "",
    },
    step4: {
      payment_id: "",
    }
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submit_step1: (state, action) => {
      state.step1 = { ...state.step1, ...action.payload }
      window.sessionStorage.setItem('form', JSON.stringify(state))
    },
    submit_step2: (state, action) => {
			state.step2 = [ ...action.payload ]
      window.sessionStorage.setItem('form', JSON.stringify(state))
    },
    submit_step3: (state, action) => {
			state.step3 = { ...state.step3, ...action.payload }
      window.sessionStorage.setItem('form', JSON.stringify(state))
    },
    submit_step4() {
      window.sessionStorage.removeItem('form');
      return initialState;
    },
    resetForm() {
      return initialState;
    }
  },
})

export const { submit_step1, submit_step2, submit_step3, submit_step4, resetForm } = formSlice.actions

export default formSlice.reducer