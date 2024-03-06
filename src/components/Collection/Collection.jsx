import React from 'react';
import s from './Collection.module.css';

function CollectionList({ name, images }) {
  return (
    <div className={s.collection}>
      <img className={s.collection__big} src={images[0]} alt="Item" />
      <div className={s.collection__bottom}>
        <img className={s.collection__mini} src={images[1]} alt="Item" />
        <img className={s.collection__mini} src={images[2]} alt="Item" />
        <img className={s.collection__mini} src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
}

function Collection() {
  return (
    <div className={s.Collection}>
      <h1>Моя коллекция фотографий</h1>
      <div className={s.top}>
        <ul className={s.tags}>
          <li className={s.active}>Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input className={s.searchInput} placeholder="Поиск по названию" />
      </div>
      <div className={s.content}>
        <CollectionList
          name="Путешествие по миру"
          images={[
            'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          ]}
        />
      </div>
      <ul className={s.pagination}>
        <li>1</li>
        <li className={s.active}>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default Collection;
