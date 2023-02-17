import { Profile } from "./profile/Profile";
import user from 'components/profile/user.json';
import { Statistics } from "./statistics/Statistics";
import data from 'components/statistics/data.json';
import friends from 'components/friendlist/friends.json';
import { FriendList } from "./friendlist/FriendList";
import transactions from 'components/transaction/transactions.json';
import { TransactionHistory } from "./transaction/TransactionHistory";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Layout>
      <GlobalStyle/>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics
        title="Upload stats" stats={data}
      />
      
      <Statistics stats={data} />
      
      <FriendList friends={friends} /> 
      
      <TransactionHistory items={transactions} />
    </Layout>
  );
};