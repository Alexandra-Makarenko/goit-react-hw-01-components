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
  username: PropTypes.string,
  tag: PropTypes.string,
 location: PropTypes.string,
    avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number,
  })
};