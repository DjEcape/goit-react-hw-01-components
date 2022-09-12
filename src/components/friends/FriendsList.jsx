import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <section class="friends">
      <ul class="friends-list">
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li class="friends-list__item" key={id}>
              <span class="friends-list__status">
                {isOnline ? 'isOnline' : 'isOffline'}
              </span>
              <img
                class="friends-list__avatar"
                src={avatar}
                alt={name}
                width="48"
              />
              <p class="friends-list__name">{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
