import styled from 'styled-components';

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  width: 300px;
  border: 2px solid #ffb3ba;
  border-radius: 7px;
  box-shadow: 4px 4px 20px -14px rgba(63, 12, 173, 1);
  background-color: ${props => {
    return props.isOnline ? "#baffc9": "	#bae1ff"
}};
  svg {
    width: 20px;
    margin-right: 5px;
    fill: #03396c;
  }
`;

export const FriendAvatar = styled.img`
  padding: 5px;
  margin-right: 15px;
  width: 60px;
  border: 2px solid #ffbdbd;
  border-radius: 20px;
  background-color: #ffffba;
`;

