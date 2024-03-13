import classes from './AddProductBtn.module.css';

const AddProductBtn = ({ text, cart }) => {
  return (
    <button className={cart ? classes.cartBtn : classes.btn}>{text}</button>
  );
};
export default AddProductBtn;
