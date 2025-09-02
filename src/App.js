import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ModalAdd from './UI/ModalAdd/ModalAdd';
import { showAddModal, showDeleteModal } from './store/cartSlice';

// страницы
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import AboutPage from './pages/About/AboutPage';
import ProfilePage from './pages/ProfileForm/ProfilePage';

function App() {
  const dispatch = useDispatch();
  const showModalAdd = useSelector((state) => state.cart.showModalAdd);
  const showModalDelete = useSelector((state) => state.cart.showModalDelete);

  return (
    <BrowserRouter basename="/shopFurniture">
      <div className="wrapper">
        <Header />

        {showModalAdd && (
          <ModalAdd
            message="Товар добавлен в вашу корзину"
            onClose={() => dispatch(showAddModal(false))}
          />
        )}

        {showModalDelete && (
          <ModalAdd
            message="Товар удален из вашей корзины"
            onClose={() => dispatch(showDeleteModal(false))}
          />
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
