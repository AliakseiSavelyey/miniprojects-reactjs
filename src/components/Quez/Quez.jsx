import { useState } from 'react';
import s from './Quez.module.css';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result() {
  return (
    <div className={s.result}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="salut"
      />
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function Game() {
  return (
    <>
      <div className={s.progress}>
        <div style={{ width: '40%' }} className={s.progressInner}></div>
      </div>
      <h1 className={s.questionTitle}>Что такое useState?</h1>
      <ul>
        <li>Это функция для хранения данных компонента</li>
        <li>Это глобальный стейт</li>
        <li>Это когда на ты никому не нужен</li>
      </ul>
    </>
  );
}

const Quez = () => {
  const [step, setStep] = useState(0);
  const question = questions[step];
  console.log(question);
  return (
    <div className={s.quez}>
      <Game />
      {/* <Result /> */}
    </div>
  );
};

export default Quez;
