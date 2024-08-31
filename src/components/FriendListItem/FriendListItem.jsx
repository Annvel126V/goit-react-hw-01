import s from './FriendListItem.module.css';
import clsx from 'clsx';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? s.green : s.red)}>
        {isOnline ? 'online' : 'ofline'}
      </p>
    </div>
  );
};

export default FriendListItem;
