import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendCard}>
      <img className={s.friendAvatar} src={avatar} alt="Avatar" />
      <p className={s.friendName}>{name}</p>
      <p className={isOnline ? s.green : s.red}>
        {isOnline ? 'online' : 'ofline'}
      </p>
    </div>
  );
};

export default FriendListItem;
