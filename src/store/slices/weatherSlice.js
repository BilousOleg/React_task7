import { createSlice } from '@reduxjs/toolkit';
import CONSTANTS from '../../constants';

const {
  SPEED: { KPH },
  TEMPERATURE: { CELS },
} = CONSTANTS.UNITS;

const initialState = {
  temperature: 10,
  windSpeed: 1,
  tempUnit: CELS,
  speedUnit: KPH,
};

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {
    changeTempUnit: (state, { payload }) => {
      // Числове значення завжди залишатиметься на celsius (10) - змінюється тільки одиниця виміру

      state.tempUnit = payload;
    },
    changeSpeedUnit: (state, { payload }) => {
      // Числове значення завжди залишатиметься на kmh (1) - змінюється тільки одиниця виміру
      state.speedUnit = payload;
    },
  },
});

const { reducer, actions } = weatherSlice;

export const { changeSpeedUnit, changeTempUnit } = actions;

export default reducer;
