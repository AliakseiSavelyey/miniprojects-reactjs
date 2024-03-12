import React, { useEffect, useState } from 'react';
import s from './Collection.module.css';

const cats = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];

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
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : '';

    fetch(
      `https://65e867144bb72f0a9c4f3740.mockapi.io/collection?page=${page}&limit=3${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('ошибка');
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className={s.Collection}>
      <h1 className={s.collectionTitle}>Моя коллекция фотографий</h1>
      <div className={s.top}>
        <ul className={s.pagination}>
          {[...Array(5)].map((_, i) => (
            <li
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? `${s.active}` : ''}
              key={i}
            >
              {i + 1}
            </li>
          ))}
        </ul>
        
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className={s.searchInput}
          placeholder="Поиск по названию"
        />
      </div>
      <div className={s.content}>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <CollectionList key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className={s.tags}>
          {cats.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? `${s.active}` : ''}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Collection;
