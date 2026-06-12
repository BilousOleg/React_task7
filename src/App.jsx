import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import UserPage from './pages/UserPage';
import WeatherPage from './pages/WeatherPage';
import styles from './App.module.sass';
import CONSTANTS from './constants';

const {
  ROUTES: { USER, WEATHER },
} = CONSTANTS;

function App () {
  return (
    <Router>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route index path='/' element={<Navigate to={USER} />} />
          <Route path={USER} element={<UserPage />} />
          <Route path={WEATHER} element={<WeatherPage />} />
          <Route path='*' element={<div>404 Error</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
