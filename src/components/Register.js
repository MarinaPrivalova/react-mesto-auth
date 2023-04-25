import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form">
        <fieldset className="auth__fieldset">
          <input
            type="email"
            name="email"
            className="auth__input"
            placeholder="Email"
            required=""
          />
          <input
            type="password"
            name="password"
            className="auth__input"
            placeholder="Пароль"
            minLength={8}
            maxLength={50}
            required=""
          />
        </fieldset>
        <button className="auth__submit">Зарегистрироваться</button>
      </form>
      <Link to="/sign-in" className="auth__link">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
