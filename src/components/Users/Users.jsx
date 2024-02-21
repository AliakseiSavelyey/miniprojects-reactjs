import React from 'react';
import { Success } from './User/Guest';
import { Guest } from './User/Guest';


// Тут список пользователей: https://reqres.in/api/users

const Users=()=> {
  return (
    <div className="App">
      <Guest/>
      {/* <Success /> */}
    </div>
  );
}

export default Users;