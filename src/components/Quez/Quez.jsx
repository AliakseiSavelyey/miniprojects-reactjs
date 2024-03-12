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

function Result({ correct }) {
  return (
    <div className={s.result}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="salut"
      />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="/" >
        <button className={s.againBtn} >Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className={s.progress}>
        <div
          style={{ width: `${percentage}%` }}
          className={s.progressInner}
        ></div>
      </div>
      <h1 className={s.questionTitle}>{question.title}</h1>
      <ul>
        {question.variants.map((el, index) => (
          <li className={s.progressItem} onClick={() => onClickVariant(index)} key={index}>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}

const Quez = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className={s.quez}>
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default Quez;
