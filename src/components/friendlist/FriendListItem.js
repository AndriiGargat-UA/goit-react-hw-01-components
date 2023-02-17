import PropTypes from 'prop-types';
import { FriendAvatar, FriendsListItem } from './FriendListItem.style';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem>
      <span className="status">{isOnline}</span>
      <FriendAvatar src={avatar} alt={name} />
      <p className="name">{name}</p>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
