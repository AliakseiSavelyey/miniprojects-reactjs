import React from 'react';
// import { Success } from './User/Guest';
import { Guest } from './User/Guest';
import s from './Users.module.css'

// Тут список пользователей: https://reqres.in/api/users

const Users=()=> {
  return (
    <div className={s.users}>
      <Guest/>
      {/* <Success /> */}
    </div>
  );
}

export default Users;