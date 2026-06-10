import CONSTANTS from '../constants';

const {
  UNITS: {
    TEMPERATURE: { FAHR },
    SPEED: { MPS },
  },
} = CONSTANTS;

export const convertTemperature = (temp, unit) => {
  switch (unit) {
    case FAHR:
      return ((temp * 9) / 5 + 32).toFixed(1);
    default:
      return temp;
  }
};

export const convertSpeed = (speed, unit) => {
  switch (unit) {
    case MPS:
      return (speed / 3.6).toFixed(1);
    default:
      return speed;
  }
};
