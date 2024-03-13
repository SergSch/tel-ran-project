import classes from './SmallButton.module.css';

const SmallButton = ({ textSmallBtn }) => {
  return <button className={classes.btn}>{textSmallBtn}</button>;
};
export default SmallButton;
