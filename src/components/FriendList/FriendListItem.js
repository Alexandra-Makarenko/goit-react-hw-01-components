import PropTypes from "prop-types";
import { Span,Div } from './FriendListItem.styled';
export const FriendListItem = ({friend:{ avatar,name,isOnline} }) => {
    return (
       <Div>
        <Span isOnline={isOnline}></Span>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
       </Div>
    
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};