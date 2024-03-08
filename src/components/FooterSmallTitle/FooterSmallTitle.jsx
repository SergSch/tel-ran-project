import classes from './FooterSmallTitle.module.css';

const FooterSmallTitle = ({ text }) => {
  return <h5 className={classes.title}>{text}</h5>;
};
export default FooterSmallTitle;
