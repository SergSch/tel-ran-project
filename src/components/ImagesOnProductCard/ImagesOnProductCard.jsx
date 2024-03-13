// import classes from './ImagesOnProductCard.module.css';
// import like from '../../assets/images/header/like.svg';
// import cart from '../../assets/images/header/cart.svg';

// const ImagesOnProductCard = ({ none }) => {
//   return (
//     <div className={classes.wrapper}>
//       <img src={like} alt="Like" className={classes.img} />

//       <img
//         src={cart}
//         alt="Cart"
//         className={classes.img}
//         style={{ display: none ? 'none' : '' }}
//       />
//     </div>
//   );
// };
// export default ImagesOnProductCard;

import classes from './ImagesOnProductCard.module.css';
import { ReactComponent as LikeIcon } from '../../assets/images/header/like.svg';
import { ReactComponent as CartIcon } from '../../assets/images/header/cart.svg';

const ImagesOnProductCard = ({ none }) => {
  return (
    <div className={classes.wrapper}>
      <LikeIcon className={classes.img} />
      <CartIcon className={classes.img} />
    </div>
  );
};
export default ImagesOnProductCard;
