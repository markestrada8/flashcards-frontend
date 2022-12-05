import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { GiMusicSpell } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';
import Footer from '../Footer/Footer';

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  let activeStyle = {
    borderBottom: '3px solid #ffffff',
  };

  const handleButtonClick = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  // let activeClassName = 'underline';
  return (
    <>
      <div className="navbar">

        <div className="title">
          <h1>Flash Cards</h1>
        </div>
        <div className="menu-icon" onClick={handleButtonClick}>
          {menuActive ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>
        <ul className={menuActive ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="view"
              className="nav-link"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              View
            </NavLink>
          </li>
          <li>
            <NavLink
              to="edit"
              className="nav-link"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Edit
            </NavLink>
          </li>
        </ul>


      </div>
      <Outlet />

    </>
  );
};

export default Navigation;
