import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCartItemWithTimeout,
  removeCartItemWithTimeout,
  showAddModal,
  showDeleteModal,
} from './store/cartSlice';
import axios from 'axios';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
import ModalAdd from './UI/ModalAdd/ModalAdd';
import Pagination from './components/Paginaiton/Pagination';
import About from './components/About/About';
import ProfileForm from './components/ProfileForm/ProfileForm';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const showModalAdd = useSelector((state) => state.cart.showModalAdd);
  const showModalDelete = useSelector((state) => state.cart.showModalDelete);

  const [items, setItems] = useState([]);
  const [loadingItems, setIsLoadingItems] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const [page, setPage] = useState(1); // pagination
  const limit = 5; // сколько товаров на странице

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
    // Добавить в корзину через Redux-toolkit
    dispatch(addCartItemWithTimeout(item));
  };

  const handleRemoveFromCart = (id) => {
    // Удалить из корзины через Redux-toolkit
    dispatch(removeCartItemWithTimeout(id));
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
    <BrowserRouter basename="/shopFurniture">
      <div className="wrapper">
        {showModalAdd ? (
          <ModalAdd
            message="Товар добавлен в вашу корзину"
            onClose={() => dispatch(showAddModal(false))}
          />
        ) : null}
        {showModalDelete ? (
          <ModalAdd
            message="Товар удален из вашей корзины"
            onClose={() => dispatch(showDeleteModal(false))}
          />
        ) : null}
        <Routes>
          <Route
            path="cart"
            element={<Cart cart={cartItems} items={items} onRemove={handleRemoveFromCart} />}
          />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<ProfileForm />} />
          <Route
            path="/"
            element={
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
                  <div className="pagination__container"></div>
                </div>
                <Pagination page={page} setPage={setPage} />
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
