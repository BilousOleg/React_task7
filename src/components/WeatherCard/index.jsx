import { useDispatch, useSelector } from 'react-redux';
import { FaTemperatureLow, FaWind } from 'react-icons/fa';
import Current from './Current';
import styles from './WeatherCard.module.sass';
import CONSTANTS from './../../constants';
import {
  changeSpeedUnit,
  changeTempUnit,
} from '../../store/slices/weatherSlice';

const {
  SPEED: { MPS, KPH },
  TEMPERATURE: { CELS, FAHR },
} = CONSTANTS.UNITS;

// Функція отримання одиниць вимірювання для відображення (не обов'язкова, але для гарного вигляду зробив)
function getRealUnit (unit) {
  switch (unit) {
    case MPS:
      return 'M/s';
    case KPH:
      return 'Km/h';
    case CELS:
      return '°C';
    case FAHR:
      return '°F';
    default:
      return unit;
  }
}

function WeatherCard () {
  const dispatch = useDispatch();

  const { temperature, windSpeed, tempUnit, speedUnit } = useSelector(
    state => state.weather
  );

  const changeSpeed = ({ target: { value } }) => {
    dispatch(changeSpeedUnit(value));
  };

  const changeTemp = ({ target: { value } }) => {
    dispatch(changeTempUnit(value));
  };

  return (
    <article className={styles.weatherCard}>
      <h2>Weather</h2>
      <ul>
        <Current
          valueIcon={<FaTemperatureLow />}
          currentValue={temperature.toFixed(1)}
          realValueUnit={getRealUnit(tempUnit)}
        />
        <Current
          valueIcon={<FaWind />}
          currentValue={windSpeed.toFixed(1)}
          realValueUnit={getRealUnit(speedUnit)}
        />
      </ul>
      <select name='temperature' value={tempUnit} onChange={changeTemp}>
        <option value={CELS}>°C</option>
        <option value={FAHR}>°F</option>
      </select>
      <select name='windSpeed' value={speedUnit} onChange={changeSpeed}>
        <option value={KPH}>Km/h</option>
        <option value={MPS}>M/s</option>
      </select>
    </article>
  );
}

export default WeatherCard;
