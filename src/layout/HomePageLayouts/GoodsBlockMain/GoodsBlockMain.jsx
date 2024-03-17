import classes from './GoodsBlockMain.module.css';
import TitleH2 from '../../../components/TitleH2/TitleH2';
import Line from '../../../UI/Line/Line';
import SmallButton from '../../../UI/SmallButton/SmallButton';
import { Link } from 'react-router-dom';
import { useGetAllGoodsQuery } from '../../../store/reducers/apiGoodsSlice';
import SingleGoodsCard from './../../../components/SingleGoodsCard/SingleGoodsCard';
import { useSelector } from 'react-redux';

const GoodsBlockMain = () => {
  const { data } = useGetAllGoodsQuery();
  const { theme } = useSelector((state) => state.theme);
  
//   сортировка продуктов со скидками и отбор рендомной последовательности

  const shuffledProducts = data?.filter((product) => product.discont_price)
  .sort(() => Math.random() - 0.5);
  return (
    <div className={` ${theme === 'dark' ? classes.dark : ''}`}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.title_block}>
            <TitleH2 text="Sale" />
            <div className={classes.btn_block}>
              <Line />
              <div className={classes.topSmallBtn}>
                <Link to={'/products/sale'}>
                  <SmallButton text="All sales" />
                </Link>
              </div>
            </div>
          </div>

{/* выбор 4 карточек */}
          <div className={classes.goodsWrapper}>
            {shuffledProducts?.slice(0, 4).map((product) => (
             <SingleGoodsCard key={product.id} {...product} />
             ))}
         </div>

          {/* <div className={classes.bottomSmallBtn}>
            <Link to={'/products/sale'}>
              <SmallButton text="All sales" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default GoodsBlockMain;