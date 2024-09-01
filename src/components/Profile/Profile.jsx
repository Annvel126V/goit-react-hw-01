import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <img className={s.avatar} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.statsLaibel}>Followers</span>
          <span className={s.statsValue}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsLaibel}>Views</span>
          <span className={s.statsValue}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsLaibel}>Likes</span>
          <span className={s.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
