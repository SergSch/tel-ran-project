import classes from './StartBlockButton.module.css';

const StartBlockButton = ({ text }) => {
  return <button className={classes.wrapper}>{text}</button>;
};
export default StartBlockButton;
