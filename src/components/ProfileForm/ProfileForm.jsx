import { NavLink } from 'react-router-dom';
import './ProfileForm.css';

const ProfileForm = () => {
  return (
    <div>
      <NavLink to="/">
        <div className="cart__icon">⬅️ Выйти на главную страницу</div>
      </NavLink>
      <h2 className="profile__form-title">Личный кабинет</h2>
      <form className="profile__form" action="#">
        <input className="profile__form-input" placeholder="Введите логин"></input>
        <input className="profile__form-input" placeholder="Введите пароль"></input>
        <button className="profile__form-btn-ent">Войти</button>
        <p>или</p>
        <button className="profile__form-btn-reg">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default ProfileForm;
