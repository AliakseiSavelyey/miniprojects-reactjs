import React, { useEffect, useState } from 'react';
// import { Success } from './User/Guest';
import { Guest } from './User/Guest';
import { Success } from './User/Success';
import s from './Users.module.css';

// Тут список пользователей: https://reqres.in/api/users

const Users = () => {
  const [user, setUser] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUser(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('ошибка');
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className={s.users}>
      {success ? (
        <Success count={invites.length}/>
      ) : (
        <Guest
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={user}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
};

export default Users;
