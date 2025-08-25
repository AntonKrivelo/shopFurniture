import { useState, memo } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import ModalContacts from '../../UI/ModalContacts/ModalContacts';

const Header = memo(() => {
  const [showModalContacts, setShowModalContacts] = useState(false);

  return (
    <header>
      {showModalContacts ? <ModalContacts onClose={() => setShowModalContacts(false)} /> : null}
      <div>
        <span className="logo">Shop Furniture</span>
        <ul className="nav">
          <li className="nav__item">Про нас</li>
          <li onClick={() => setShowModalContacts(true)} className="nav__item">
            Контакты
          </li>
          <li className="nav__item">Кабинет</li>
          <NavLink to="cart">
            <li className="nav__item">Корзина</li>
          </NavLink>
        </ul>
      </div>
      <div className="presentantion"></div>
    </header>
  );
});

export default Header;
