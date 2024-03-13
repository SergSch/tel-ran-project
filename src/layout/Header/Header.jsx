import classes from './Header.module.css';
import logo from '../../assets/images/header/logo.svg';
import day from '../../assets/images/header/day.svg';
import night from '../../assets/images/header/night.svg';

import like from '../../assets/images/header/like.svg';
import cart from '../../assets/images/header/cart.svg';
import menu from '../../assets/images/header/menu.svg';
import Navigation from '../../components/Navigation/Navigation';
import close from '../../assets/images/header/close.svg';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/reducers/themeSlice';
import { useClickOutsaide } from '../../customHooks/useClickOutSide';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const menuRef = useRef(null);
  useClickOutsaide(menuRef, () => {
    setIsOpen(false);
  });

  return (
    <div className={` ${theme === 'dark' ? classes.dark : ''}`}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.logoBlock}>
            <img src={logo} alt="Logo" className={classes.logo} />
            <img
              src={day}
              alt="themeDay"
              style={{
                display: theme === 'light' ? 'block' : 'none',
              }}
              className={classes.theme}
              onClick={() => dispatch(toggleTheme())}
            />
            <img
              src={night}
              alt="themeDay"
              style={{
                display: theme === 'light' ? 'none' : 'block',
              }}
              className={classes.theme}
              onClick={() => dispatch(toggleTheme())}
            />
          </div>
          <div
            className={`${classes.nav_wrap}  ${isOpen ? classes.active : ''} ${
              theme === 'dark' ? classes.dark : ''
            }`}
            ref={menuRef}
          >
            <img
              src={close}
              alt="Close"
              className={`${classes.close} ${
                theme === 'dark' ? classes.menuDark : ''
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
            <Navigation />
          </div>
          <div className={classes.imgBlock}>
            <img
              src={like}
              alt="Heart"
              className={theme === 'dark' ? classes.menuDark : ''}
            />
            <img
              src={cart}
              alt="Cart"
              className={theme === 'dark' ? classes.menuDark : ''}
            />
            <img
              src={menu}
              alt="Menu"
              className={`${classes.menu} ${
                theme === 'dark' ? classes.menuDark : ''
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
