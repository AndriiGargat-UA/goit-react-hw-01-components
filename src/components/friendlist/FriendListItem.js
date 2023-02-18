import PropTypes from 'prop-types';
import { FriendAvatar, FriendsListItem } from './FriendListItem.style';
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem isOnline={isOnline}>
      {/* <span className="status">{isOnline}</span> */}
      {isOnline ? <IoIosRadioButtonOn/> : <IoIosRadioButtonOff/>}
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
