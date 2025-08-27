import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import ModalContacts from '../../UI/ModalContacts/ModalContacts';

const Header = () => {
  const [showModalContacts, setShowModalContacts] = useState(false);

  return (
    <header>
      {showModalContacts ? <ModalContacts onClose={() => setShowModalContacts(false)} /> : null}
      <div>
        <NavLink to="/">
          <span className="logo">Shop Furniture</span>
        </NavLink>
        <ul className="nav">
          <NavLink to="about">
            <li className="nav__item">О нас</li>
          </NavLink>
          <li onClick={() => setShowModalContacts(true)} className="nav__item">
            Контакты
          </li>
          <NavLink to="profile">
            <li className="nav__item">Кабинет</li>
          </NavLink>
          <NavLink to="cart">
            <li className="nav__item">Корзина</li>
          </NavLink>
        </ul>
      </div>
      <div className="presentantion"></div>
    </header>
  );
};

export default Header;
