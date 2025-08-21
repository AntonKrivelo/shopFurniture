import './Header.css';

const Header = () => {
  return (
    <header>
      <div>
        <span className="logo">Shop Furniture</span>
        <ul className="nav">
          <li className="nav__item">Про нас</li>
          <li className="nav__item">Контакты</li>
          <li className="nav__item">Кабинет</li>
        </ul>
      </div>
      <div className="presentantion"></div>
    </header>
  );
};

export default Header;
