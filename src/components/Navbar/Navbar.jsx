import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons'
import { IconButton, Badge } from '@material-ui/core'
import './Navbar.css';

const  Navbar = ({totalItems}) => {
  const location = useLocation();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img 
            className='logo'
            src='/images/logo.jpg'
            />
            <div className="navbar-title-flex">
              <div><h5>Parfimerija</h5></div>
              <div><h1>OLIMPIJA</h1></div>
            </div>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/katalog' className='nav-links' onClick={closeMobileMenu}>
                KATALOG
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/kontakt' className='nav-links' onClick={closeMobileMenu}>
                KONTAKT
              </Link>
            </li>

            { location.pathname === '/' && (
              <div className='nav-item'>
                <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                  <Badge badgeContent={totalItems} color='secondary'>
                    <ShoppingCart/>
                  </Badge>
                </IconButton>
              </div> ) }

          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
