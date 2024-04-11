import classes from './DescriptionAndFilterTitle.module.css';
import { useSelector } from 'react-redux';

const DescriptionAndFilterTitle = ({ text }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`${classes.txt} ${theme === 'dark' ? classes.dark : ''}`}>
      {text}
    </div>
  );
};
export default DescriptionAndFilterTitle;
