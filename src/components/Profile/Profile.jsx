import PropTypes from "prop-types";
import {
  Card,
  InfoContainer,
  UserName,
  InfoList,
  Label,
} from './Profile.styled';

export const Profile = ({
  profile: { username, tag, location, avatar, stats },
}) => {
  return (
<Card>
  <InfoContainer>
    <img
      src={avatar}
      alt={username}
      
    />
    <UserName>{username}</UserName>
              <p>@{tag}</p>
    <Label>{location}</Label>
  </InfoContainer>

  <InfoList>
    <li>
      <Label>Followers</Label>
      <Label>{stats.followers}</Label>
    </li>
    <li>
      <Label>Views</Label>
      <Label>{stats.views}</Label>
    </li>
    <li>
      <Label>Likes</Label>
      <Label>{stats.likes}</Label>
    </li>
  </InfoList>
</Card>
  );
};


Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
    }).isRequired
  }).isRequired,
};