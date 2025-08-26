import './Cart.css';
import { NavLink } from 'react-router-dom';

const Cart = ({ cart, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  console.log('render Cart');
  return (
    <div className="cart">
      <NavLink to="/">
        <div className="cart__icon">⬅️ Выйти на главную страницу</div>
      </NavLink>
      <hr className="horizontal__line"></hr>
      <h2 className="cart__title">🛒 Корзина</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Корзина пуста</p>
      ) : (
        <div className="cart__container-items">
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img className="cart__image" src={item.imageUrl} alt="imgUrl" />
                {item.title} — {item.price} $<button onClick={() => onRemove(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <h3> Общая стоимость: {total} $</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
