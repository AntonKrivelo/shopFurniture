import { memo } from 'react';
import './Item.css';

const Item = ({ item, onAdd }) => {
  return (
    <div className="item">
      <img className="item__img" src={item.imageUrl} alt="img-furniture" />
      <h3 className="item__title">{item.title}</h3>
      <p className="item__price">{item.price} $</p>
      <button onClick={() => onAdd(item)} className="item__btn">
        Добавить в корзину
      </button>
    </div>
  );
};

export default memo(Item);
