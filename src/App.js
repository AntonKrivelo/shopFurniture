import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
import ModalAdd from './UI/ModalAdd/ModalAdd';

function App() {
  const [items, setItems] = useState([]);
  const [loadingItems, setIsLoadingItems] = useState(true);
  const [cart, setCart] = useState([]);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDeleteCart, setShowModalDeleteCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoadingItems(true);
    axios
      .get('https://68385e662c55e01d184d08ef.mockapi.io/itemsNew')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => {
        console.log('Ошибка при загрузке', error);
      })
      .finally(() => {
        setIsLoadingItems(false);
      });
  }, []);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => {
      const name = String(item.name ?? item.title ?? '').toLowerCase();
      const desc = String(item.description ?? '').toLowerCase();
      return name.includes(q) || desc.includes(q);
    });
  }, [items, searchQuery]);

  const addCartItem = (item) => {
    setCart((prev) => [...prev, item]);
    setShowModalAdd(true);
    setTimeout(() => {
      // закрыть окно через 2 секунды
      setShowModalAdd(false);
    }, 2000);
  };

  const onRemoveCartItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setShowModalDeleteCart(true);
    setTimeout(() => {
      setShowModalDeleteCart(false);
    }, 2000);
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        {showModalAdd ? (
          <ModalAdd
            message="Товар добавлен в вашу корзину"
            onClose={() => setShowModalAdd(false)}
          />
        ) : null}
        {showModalDeleteCart ? (
          <ModalAdd
            message="Товар удален из вашей корзины"
            onClose={() => setShowModalDeleteCart(false)}
          />
        ) : null}
        <Routes>
          <Route
            path="cart"
            element={<Cart cart={cart} items={items} onRemove={onRemoveCartItem} />}
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <h1 className="wrapper__title">Наши товары</h1>
                <form className="search__form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search__panel"
                    placeholder="Поиск по названию..."
                  />
                </form>
                <div className="shop__items">
                  {loadingItems ? (
                    <h3 className="loading__title">Пожалуйста подождите...</h3>
                  ) : filteredItems.length ? (
                    filteredItems.map((item) => (
                      <Item key={item.id} item={item} onAdd={addCartItem} />
                    ))
                  ) : (
                    <p>Ничего не найдено по запросу “{searchQuery}”.</p>
                  )}
                </div>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
