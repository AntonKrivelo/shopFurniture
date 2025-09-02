import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import { removeCartItemWithTimeout } from '../../store/cartSlice';

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeCartItemWithTimeout(id));
  };

  return <Cart cart={cartItems} onRemove={handleRemove} />;
}
