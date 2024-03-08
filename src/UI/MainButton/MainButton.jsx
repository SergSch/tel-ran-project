import classes from './MainButton.module.css';

const MainButton = ({ text }) => {
  return <div className={classes.btn}>{text}</div>;
};
export default MainButton;
