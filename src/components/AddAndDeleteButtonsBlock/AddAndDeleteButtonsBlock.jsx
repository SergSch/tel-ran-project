import GoodsCategoriesTitle from '../GoodsCategoriesTitle/GoodsCategoriesTitle';
import classes from './AddAndDeleteButtonsBlock.module.css';
import minus from '../../assets/images/btnIcons/minus.svg';
import plus from '../../assets/images/btnIcons/plus.svg';
import { useSelector } from 'react-redux';

const AddAndDeleteButtonsBlock = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.line} ${classes.top}`}></div>
      <button className={classes.btn}>
        <img src={minus} alt="Minus" />
      </button>
      <p className={`${classes.count} ${theme === 'dark' ? classes.dark : ''}`}>
        1
      </p>
      <button className={classes.btn}>
        <img src={plus} alt="Plus" />
      </button>
      <div className={`${classes.line} ${classes.bottom}`}></div>
    </div>
  );
};

export default AddAndDeleteButtonsBlock;
