import './Cart.css';

export default function Cart({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2 className="cart__title">🛒 Корзина</h2>

      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} — {item.price} $<button onClick={() => onRemove(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <h3>{total} $</h3>
        </>
      )}
    </div>
  );
}
