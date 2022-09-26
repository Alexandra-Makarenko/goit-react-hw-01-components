import PropTypes from "prop-types";
import { FriendListItem } from './FriendListItem';
import { List,ListItem } from './FriendList.styled';
// import { List } from './FriendList.styled';
export const FriendList = ({ friends }) => {
    return (
       <List>
   {friends.map((friend, idx) => (
        
        <ListItem key={idx}>
           <FriendListItem friend={friend} />
        </ListItem>
      ))}
            </List>
    
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};