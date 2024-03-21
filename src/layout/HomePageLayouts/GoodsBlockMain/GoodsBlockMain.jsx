import classes from './GoodsBlockMain.module.css';
import { Link } from 'react-router-dom';
import { useGetAllGoodsQuery } from '../../../store/reducers/apiGoodsSlice';
import SingleGoodsCard from './../../../components/SingleGoodsCard/SingleGoodsCard';
import { useSelector, useDispatch } from 'react-redux';
import { ROUTES } from '../../../utils/routes';
import StartBlockButton from '../../../UI/StartBlockButton/StartBlockButton';
import { addProduct, countTotalSum } from '../../../store/reducers/cartSlice';
import toast from 'react-hot-toast';

import TitleH2 from '../../../components/TitleH2/TitleH2';
import Line from '../../../UI/Line/Line';
import SmallButton from '../../../UI/SmallButton/SmallButton';




const GoodsBlockMain = () => {
  const { data } = useGetAllGoodsQuery();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  
//   сортировка продуктов со скидками и отбор рендомной последовательности

  const shuffledProducts = data?.filter((product) => product.discont_price)
  .sort(() => Math.random() - 0.5);

// Добавление в корзину
  const handleAddToCart = (event, product) => {
    event.preventDefault();
    dispatch(addProduct(product));
    dispatch(countTotalSum());
    toast.success('Added to Cart successfully');
  };


  return (
    <div className={` ${theme === 'dark' ? classes.dark : ''}`}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.title_block}>
            <TitleH2 text="Sale" />
            <div className={classes.btn_block}>
              <Line />
              <div className={classes.topSmallBtn}>
                <Link to={`${ROUTES.ALLPRODUCTS}?category=2`}>
                  <SmallButton text="All sales" />
                </Link>
              </div>
            </div>
          </div>

{/* выбор 4 карточек */}
          <div className={classes.goodsWrapper}>
          {shuffledProducts?.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to={`${ROUTES.PRODUCT.replace(':id', product.id)}`}
              >
                
                <SingleGoodsCard
                  {...product}
                  handleAddToCart={(event) => handleAddToCart(event, product)}
                />
              </Link>
            ))}
        </div>
        <div className={classes.bottomSmallBtn}>
            <Link to={`${ROUTES.ALLPRODUCTS}?category=2`}>
              <StartBlockButton textSmallBtn="All sales" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GoodsBlockMain;