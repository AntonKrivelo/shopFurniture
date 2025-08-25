import './Cart.css';
import { NavLink } from 'react-router-dom';

const Cart = ({ cart, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <NavLink to="/">
        <h2 className="cart__btn"> ⬅️ Выйти на главную страницу</h2>
      </NavLink>
      <h2 className="cart__title">🛒 Корзина</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Корзина пуста</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img className="cart__image" src={item.imageUrl} alt="imgUrl" />
                {item.title} — {item.price} $<button onClick={() => onRemove(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <h3> Общая стоимость: {total} $</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
