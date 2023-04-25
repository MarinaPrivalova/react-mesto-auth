import React from 'react';
import logo from '../images/header_logo.svg';
import { Link, useLocation} from 'react-router-dom';

function Header(props) {
  const { loggedIn, email, logOut } = props;
  const location = useLocation();
  const linkText = (location.pathname === '/sign-in') ? 'Регистрация' : 'Войти';
  const buttonText = loggedIn ? 'Выйти' : linkText;
  const linkPath = (location.pathname === '/sign-in') ? '/sign-up' : '/sign-in';
 
  return (
    <header className='header'>
      <img src={logo} className='header__logo' alt='Логотип Место Россия' />
      <div className='header__info'>
        {loggedIn && <p className="header__email">{email}</p>}
        {!loggedIn && <Link to={linkPath} className="header__link header__button-logout">{buttonText}</Link>}
        {loggedIn && <button className="header__link header__button-logout" onClick={logOut}>{buttonText}</button>}
      </div>
    </header>
  );
}

export default Header;
