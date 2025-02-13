import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


const Nav = ({ onClose }) => {
  const navigations = [
    {
      item: "Home",
      link: '/'
    },
    {
      item: "Features",
      link: '#features'
    },
    {
      item: "Benefits",
      link: '#benefits'
    },
    {
      item: "About Us",
      link: '#about'
    },
    {
      item: "Contact Us",
      link: '#contact'
    }
  ]

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    (
      <ul className={isMobile ? "mobile-navigation montserrat" : "tab-navigation montserrat"}>
        <li className={isMobile ? "mobile-menu-text montserrat" : "tab-menu-text montserrat"}>
          <span> Menu</span>
        </li>
        {navigations.map((item) => (
          item.link === "/" ? <li className={isMobile ? "mobile-nav-item montserrat" : 'tab-nav-item montserrat'} key={item.item} onClick={onClose}>
            <div className='nav-item-link'>
              <Link to='/' >{item.item}</Link>
            </div>
          </li> : <li className={isMobile ? "mobile-nav-item montserrat" : 'tab-nav-item montserrat'} key={item.item} onClick={onClose}>
            <a href={item.link} className='nav-item-link'>{item.item}</a>
          </li>
        ))}
        <li className={isMobile ? "mobile-nav-item montserrat" : 'tab-nav-item montserrat'} id='register' onClick={onClose}>
          <div className={isMobile ? "mobile-regsiter-button-box montserrat" : 'tab-regsiter-button-box montserrat'}>
            <Link to="/Register">REGISTER NOW</Link>
          </div>
        </li>
      </ul>
    )
  );
}

export default Nav;
