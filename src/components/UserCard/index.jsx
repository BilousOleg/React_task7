import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { FaHeart } from 'react-icons/fa';
import { toggleFavourite } from '../../store/slices/userSlice';
import styles from './UserCard.module.sass';

function UserCard () {
  const dispatch = useDispatch();

  const { firstName, lastName, userImage, isFavourite } = useSelector(
    state => state.user
  );

  const handleToggleFavourite = () => {
    dispatch(toggleFavourite());
  };

  const switchBtnClasses = classNames(styles.switchFavBtn, {
    [styles.isFavourite]: isFavourite,
  });

  return (
    <article className={styles.userCard}>
      <section className={styles.imageSection}>
        <button onClick={handleToggleFavourite} className={switchBtnClasses}>
          <FaHeart />
        </button>
        <img className={styles.userImage} src={userImage} alt='user image' />
      </section>
      <section className={styles.infoSection}>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
          illo.
        </p>
      </section>
    </article>
  );
}

export default UserCard;
