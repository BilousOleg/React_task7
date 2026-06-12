import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';

const {
  ROUTES: { USER, WEATHER },
} = CONSTANTS;

function Header () {
  const pathname = useLocation().pathname;

  const isUserPage = pathname === USER;

  return (
    <header className={styles.header}>
      <span className={styles.logo}>React. Redux Intro</span>
      <NavLink className={styles.navLink} to={isUserPage ? WEATHER : USER}>
        {isUserPage ? 'Weather' : 'User'}
      </NavLink>
    </header>
  );
}

export default Header;
