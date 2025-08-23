import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <span className="logo">Shop Furniture</span>
        <ul className="nav">
          <li className="nav__item">Про нас</li>
          <li className="nav__item">Контакты</li>
          <li className="nav__item">Кабинет</li>
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
