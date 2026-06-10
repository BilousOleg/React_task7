import UserCard from '../../components/UserCard';
import WeatherCard from '../../components/WeatherCard';
import styles from './MainPage.module.sass';

function UserPage () {
  return (
    <main className={styles.page}>
      <UserCard />
      <WeatherCard />
    </main>
  );
}

export default UserPage;
