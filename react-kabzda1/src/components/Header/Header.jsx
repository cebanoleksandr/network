import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
    return (
        <header className='header'>
          <div className='header__div'>
            <img 
              className='header__logo' 
              src='https://i.pinimg.com/originals/47/43/27/4743272cb7fbed0082f76c3815b3e90e.jpg'
              alt="header_photo"
            />
            <div className="login-block">
              {props.isAuth 
                  ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                  : <NavLink to={'/login'}>Login</NavLink>
              }
            </div>
          </div>
        </header>
    );
}

export default Header;
