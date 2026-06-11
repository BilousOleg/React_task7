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
        switch (payload) {
          case FAHR:
            state.temperature = (state.temperature * 9) / 5 + 32;
            break;
          case CELS:
            state.temperature = ((state.temperature - 32) * 5) / 9;
            break;
          default:
            return;
        }
        state.tempUnit = payload;
      }
    },
    changeSpeedUnit: (state, { payload }) => {
      if (state.speedUnit !== payload) {
        switch (payload) {
          case MPS:
            state.windSpeed = state.windSpeed / 3.6;
            break;
          case KPH:
            state.windSpeed = state.windSpeed * 3.6;
            break;
          default:
            return;
        }
        state.speedUnit = payload;
      }
    },
  },
});

const { reducer, actions } = weatherSlice;

export const { changeSpeedUnit, changeTempUnit } = actions;

export default reducer;
