import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItemWithTimeout } from '../../store/cartSlice';
import axios from 'axios';
import Item from '../../components/Item/Item';
import Pagination from '../../components/Pagination/Pagination';
import SearchForm from '../../components/SearchForm/SearchForm';
import Header from '../../components/Header/Header';

export default function HomePage() {
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [loadingItems, setIsLoadingItems] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    setIsLoadingItems(true);
    axios
      .get(`https://68385e662c55e01d184d08ef.mockapi.io/itemsNew?page=${page}&limit=${limit}`)
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => {
        console.log('Ошибка при загрузке', error);
      })
      .finally(() => {
        setIsLoadingItems(false);
      });
  }, [page]);

  const handleAddToCart = (item) => {
    dispatch(addCartItemWithTimeout(item));
  };

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => {
      const name = String(item.name ?? item.title ?? '').toLowerCase();
      const desc = String(item.description ?? '').toLowerCase();
      return name.includes(q) || desc.includes(q);
    });
  }, [items, searchQuery]);

  return (
    <>
      <Header />
      <h1 className="wrapper__title">Наши товары</h1>
      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="shop__items">
        {loadingItems ? (
          <h3 className="loading__title">Пожалуйста подождите...</h3>
        ) : filteredItems.length ? (
          filteredItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onAdd={() => {
                handleAddToCart(item);
              }}
            />
          ))
        ) : (
          <p>Ничего не найдено по запросу “{searchQuery}”.</p>
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}
