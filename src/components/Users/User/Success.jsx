import React from 'react';
import s from '../Users.module.css'

export const Success = ({ count }) => {
  return (
    <div className={s.successBlock}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className={s.sendInviteBtn}>Назад</button>
    </div>
  );
};