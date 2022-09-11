const FriendList = ({ friends }) => {
  return (
    <div class="friends">
      <ul class="friends__list">
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li class="item" key={id}>
              <span class="status">{isOnline}</span>
              <img class="avatar" src={avatar} alt={name} width="48" />
              <p class="name">{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
