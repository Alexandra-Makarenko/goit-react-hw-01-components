import user from '../data/user.json';
import { Profile } from './Profile/Profile'
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics'
import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList'
import transactions from '../data/transactions.json';
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
