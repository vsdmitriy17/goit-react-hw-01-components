// import { useState } from 'react';

import styles from './App.module.css';
import FriendList from './components/friendList/FriendList.jsx';
import Profile from './components/profile/Profile.jsx';
import Statistics from './components/statistics/Statistics.jsx';
import TransactionHistory
  from './components/transactionHistory/TransactionHistory.jsx';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import user from './json/user.json';

// const Comp = () => {
//   const [value, setValue] = useState(0);
//   return (
//     <div>
//       <span>Incriment{value}</span>
//       <button type="button" onClick={() => {setValue(value + 1)}}>Click</button>
//     </div>
//   )
// }

export default function App() {
  return (
    <div className={styles.container}>
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
      {/* <Comp/> */}
    </div>
  );
}
