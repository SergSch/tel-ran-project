import classes from './ProductModal.module.css';

const ProductModal = ({ active, setActive, children }) => {
  return (
    <div
      className={`${classes.modal} ${active ? classes.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`${classes.content} ${active ? classes.active : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default ProductModal;
