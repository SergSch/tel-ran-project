import classes from './ElementDiscount.module.css';

const ElementDiscount = ({ discount }) => {
  return <div className={classes.discount}>-{discount}%</div>;
};
export default ElementDiscount;
