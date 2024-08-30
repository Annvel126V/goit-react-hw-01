import FriendListItem from '.FriendListItem/FriendListItem';
import css from './FriendListItem.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
