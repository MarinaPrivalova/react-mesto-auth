import React from "react";

function Login() {
  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
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
        <button className="auth__submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;
