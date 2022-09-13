import Container from './Container/Container';
import Profile from './profile/Profile';
import Statistics from './statistic/Statistics';
import FriendList from './friends/FriendsList';
import TransactionHistory from './transactions/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Container title="Task 1 - Профиль социальной сети">

        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>

      <Container title="Task 2- Секция статистики">

        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Container>

      <Container title="Task 3 - Список друзей">

        <FriendList friends={friends} />
      </Container>

      <Container title="Task 4 - История транзакций">

        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};
