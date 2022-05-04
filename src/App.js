import Profile from './components/profile/Profile.jsx';
import Statistics from './components/statistics/Statistics.jsx';
import FriendList from './components/friendList/FriendList.jsx';
import TransactionHistory from './components/transactionHistory/TransactionHistory.jsx';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
