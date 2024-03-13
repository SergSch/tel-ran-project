import { NavLink } from 'react-router-dom';
import DayDiscount from '../../UI/DayDiscount/DayDiscount';
import classes from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../utils/routes';

const Navigation = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={`${classes.wrapper} ${
        theme === 'dark' ? classes.wrapperDark : ''
      }`}
    >
      <DayDiscount />
      <nav>
        <ul className={classes.nav}>
          <li className={classes.text}>
            <NavLink
              to={ROUTES.HOME}
              className={({ isActive, isPending }) =>
                `${isPending ? 'pending ' : ''} ${
                  isActive ? classes.active : ''
                } ${theme === 'dark' ? classes.dark : classes.link}`
              }
            >
              Main Page
            </NavLink>
          </li>
          <li className={classes.text}>
            <NavLink
              to={ROUTES.CATEGORIES}
              className={({ isActive, isPending }) =>
                `${isPending ? 'pending ' : ''} ${
                  isActive ? classes.active : ''
                } ${theme === 'dark' ? classes.dark : classes.link}`
              }
            >
              Categories
            </NavLink>
          </li>
          <li className={classes.text}>
            <NavLink
              to={'/allproducts'}
              className={({ isActive, isPending }) =>
                `${isPending ? 'pending ' : ''} ${
                  isActive ? classes.active : ''
                } ${theme === 'dark' ? classes.dark : classes.link}`
              }
            >
              All products
            </NavLink>
          </li>
          <li className={classes.text}>
            <NavLink
              to={ROUTES.ALLSALES}
              className={({ isActive, isPending }) =>
                `${isPending ? 'pending ' : ''} ${
                  isActive ? classes.active : ''
                } ${theme === 'dark' ? classes.dark : classes.link}`
              }
            >
              All sales
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
