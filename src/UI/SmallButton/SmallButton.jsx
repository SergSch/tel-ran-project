import classes from './SmallButton.module.css';

const SmallButton = ({ text }) => {
  return <button className={classes.btn}>{text}</button>;
};
export default SmallButton;
