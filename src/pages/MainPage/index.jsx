import UserCard from '../../components/UserCard';
import styles from './MainPage.module.sass';

function UserPage () {
  return (
    <main className={styles.page}>
      <UserCard />
    </main>
  );
}

export default UserPage;
