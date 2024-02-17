import { useState } from 'react';
import  s from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount(count + 1);
  };

  const countMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className={s.counter}>
      <h1 className="count">{count}</h1>
      <button onClick={countPlus} className={s.countPlus}>
        Плюс +
      </button>
      <button onClick={countMinus} className={s.countMinus}>
        Минус -
      </button>
    </div>
  );
};

export default Counter;
