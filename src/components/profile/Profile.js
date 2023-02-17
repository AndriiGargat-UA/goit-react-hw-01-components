import PropTypes from 'prop-types';
import {
  Avatar,
  DescriptionContainer,
  DescriptionText,
  Label,
  ProfileCard,
  Quantity,
  Statistics,
  StatisticsItems,
  UserDescription,
  UserName,
} from './Profile.styled';
import { GoLocation } from 'react-icons/go';
import { HiOutlineHashtag } from 'react-icons/hi';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <UserDescription>
        <Avatar src={avatar} alt="{username}" className="avatar" />
        <UserName>{username}</UserName>
        <DescriptionContainer>
          <HiOutlineHashtag />
          <DescriptionText>{tag}</DescriptionText>
        </DescriptionContainer>
        <DescriptionContainer>
          <GoLocation />
          <DescriptionText>{location}</DescriptionText>
        </DescriptionContainer>
      </UserDescription>

      <Statistics>
        <StatisticsItems>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatisticsItems>
        <StatisticsItems>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatisticsItems>
        <StatisticsItems>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatisticsItems>
      </Statistics>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
