import classes from './TitleH2.module.css';
import { useSelector } from 'react-redux';

const TitleH2 = ({ text }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`${classes.title} ${theme === 'dark' ? classes.dark : ''}`}>
      {text}
    </div>
  );
};
export default TitleH2;
