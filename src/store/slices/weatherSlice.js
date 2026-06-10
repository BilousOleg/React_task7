import { createSlice } from '@reduxjs/toolkit';
import CONSTANTS from '../../constants';

const {
  SPEED: { KPH, MPS },
  TEMPERATURE: { CELS, FAHR },
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
      if (state.tempUnit !== payload) {
        if (payload === FAHR) {
          state.temperature = (state.temperature * 9) / 5 + 32;
        } else {
          state.temperature = ((state.temperature - 32) * 5) / 9;
        }

        state.tempUnit = payload;
      }
    },
    changeSpeedUnit: (state, { payload }) => {
      if (state.speedUnit !== payload) {
        if (payload === MPS) {
          state.windSpeed = (state.windSpeed / 3.6).toFixed(2);
        } else {
          state.windSpeed = (state.windSpeed * 3.6).toFixed(2);
        }

        state.speedUnit = payload;
      }
    },
  },
});

const { reducer, actions } = weatherSlice;

export const { changeSpeedUnit, changeTempUnit } = actions;

export default reducer;
