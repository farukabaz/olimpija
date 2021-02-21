import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons'
import { IconButton, Badge } from '@material-ui/core'
import './Navbar.css';

const  Navbar = ({totalItems}) => {

  const [click, setClick] = useState(false);

  // const [button, setButton] = useState(true); change line below to this if you want to use button variable
  const [, setButton] = useState(true);

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
            alt = 'Loading Error'
            />
            <div className="navbar-title">
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
            <div className='nav-item'>
              <IconButton className='cart-icon' component={Link} to='/cart' aria-label='Show cart items'>
                <Badge badgeContent={totalItems} color='secondary'>
                  <ShoppingCart fontSize='large'/>
                </Badge>
              </IconButton>
            </div> 
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
