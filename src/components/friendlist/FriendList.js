import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import { FriendsList } from './FriendList.style';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({id, avatar, name, isOnline}) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
