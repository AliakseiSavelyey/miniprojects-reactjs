import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import s from './Convertor.module.css';

function Convertor() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => {
        res.json();
      })
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert('ощибка');
      });
  }, []);

  return (
    <div className={s.app}>
      <Block
        value={0}
        currency="RUB"
        onChangeCurrency={(cur) => console.log(cur)}
      />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default Convertor;