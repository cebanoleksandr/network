import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav__div'>
              <NavLink 
                to="/profile" 
                className='nav__link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "",
                  };
                }} 
              >
                  Profile
              </NavLink>
            </div>
            <div className='nav__div'>
              <NavLink 
                to="/dialogs" 
                className='nav__link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "",
                  };
                }}
              >
                  Messages
              </NavLink>
            </div>
            <div className='nav__div'>
              <NavLink 
                to="/news" 
                className='nav__link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "",
                  };
                }}
              >
                  News
              </NavLink>
            </div>
            <div className='nav__div'>
              <NavLink 
                to="/music" 
                className='nav__link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "",
                  };
                }}
              >
                  Music
              </NavLink>
            </div>

            <div className='nav__div'>
              <NavLink 
                to="/friends" 
                className='nav__link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "",
                  };
                }}
              >
                  Friends
              </NavLink>
            </div>

            <div className='nav__div'>
              <NavLink 
                to="/users" 
                className='nav__link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "",
                  };
                }}
              >
                  Users
              </NavLink>
            </div>

            <div className='nav__div nav__settings'>
              <NavLink 
                to="/settings" 
                className='nav__link'
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gold" : "",
                  };
                }}
              >
                  Settings
              </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
