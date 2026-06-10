import { connect } from 'react-redux';
import classNames from 'classnames';
import { FaHeart } from 'react-icons/fa';
import { toggleFavourite } from '../../store/slices/userSlice';
import styles from './UserCard.module.sass';

function UserCard ({
  firstName,
  lastName,
  userImage,
  isFavourite,
  toggleFavourite,
}) {
  const switchBtnClasses = classNames(styles.switchFavBtn, {
    [styles.isFavourite]: isFavourite,
  });

  return (
    <article className={styles.userCard}>
      <section className={styles.imageSection}>
        <button
          onClick={() => {
            toggleFavourite();
          }}
          className={switchBtnClasses}
        >
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

const mapStateToProps = state => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  userImage: state.user.userImage,
  isFavourite: state.user.isFavourite,
});

const mapDispatchToProps = {
  toggleFavourite,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
