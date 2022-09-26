import user from '../user.json';
import { Profile } from './Profile/Profile'
import data from '../data.json';
import { Statistics } from './Statistics/Statistics'
import friends from '../friends.json';
import { FriendList } from './FriendList/FriendList'
import transactions from '../transactions.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
      <Profile profile={user} />
      <Statistics statistics={data} />
      <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </>
  );
};
