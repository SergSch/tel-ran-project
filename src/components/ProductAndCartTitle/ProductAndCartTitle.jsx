import classes from './ProductAndCartTitle.module.css';
import { useSelector } from 'react-redux';

const ProductAndCartTitle = ({ text, weight }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <h3
      className={`${classes.txt} ${theme === 'dark' ? classes.dark : ''}`}
      style={{ fontWeight: weight ? '600' : '700' }}
    >
      {text}
    </h3>
  );
};
export default ProductAndCartTitle;
