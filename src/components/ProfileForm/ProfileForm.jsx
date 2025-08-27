import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ProfileForm.css';

const ProfileForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!login.trim()) {
      formErrors.login = 'Введите логин';
    } else if (login.length < 3) {
      formErrors.login = 'Логин должен быть больше 3 символов';
    } else if (!/^[A-Za-zА-Яа-яЁё]+$/.test(login)) {
      formErrors.login = 'Логин должен содержать только буквы';
    }
    if (!password.trim()) {
      formErrors.password = 'Введите пароль';
    } else if (password.length < 6) {
      formErrors.password = 'Пароль должен содержать больше 6 символов';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Форма отправлена!:', { login, password });
    }
  };

  return (
    <div>
      <NavLink to="/">
        <div className="link__home">⬅️ Выйти на главную страницу</div>
      </NavLink>
      <h2 className="profile__form-title">Личный кабинет</h2>
      <form onSubmit={handleSubmit} className="profile__form" action="#">
        <div className="profile__form-input-container">
          <input
            className="profile__form-input"
            placeholder="Введите логин"
            required="Необходимо заполнить поле"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></input>
          {errors.login && <p className="error">{errors.login}</p>}
        </div>
        <div className="profile__form-input-container">
          <input
            className="profile__form-input"
            placeholder="Введите пароль"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" className="profile__form-btn-ent">
          Войти
        </button>
        <p>или</p>
        <button type="button" className="profile__form-btn-reg">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
