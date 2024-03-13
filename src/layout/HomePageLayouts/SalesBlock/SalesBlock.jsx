import { Link } from 'react-router-dom';
import { useGetAllGoodsQuery } from '../../../store/reducers/apiGoodsSlice';
import classes from './SalesBlock.module.css';
import { useSelector } from 'react-redux';
import TitleBlockWithLine from '../../../components/TitleBlockWithLine/TitleBlockWithLine';
import SmallButton from '../../../UI/SmallButton/SmallButton';
import SingleProductCard from '../../../components/SingleProductCard/SingleProductCard';
import { ROUTES } from '../../../utils/routes';

const SalesBlock = () => {
  const { data } = useGetAllGoodsQuery();
  const { theme } = useSelector((state) => state.theme);

  const discountedProducts = data?.filter((product) => product.discont_price);
  const shuffledProducts = discountedProducts?.sort(() => Math.random() - 0.5);
  console.log(shuffledProducts);

  return (
    <div className={` ${theme === 'dark' ? classes.dark : ''}`}>
      <div className="container">
        <div className={classes.wrapper}>
          <TitleBlockWithLine
            text="Sale"
            textSmallBtn="All sales"
            link={ROUTES.ALLSALES}
          />
          <div className={classes.salesCardWrapper}>
            {shuffledProducts?.slice(0, 4).map((product) => (
              <SingleProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className={classes.bottomSmallBtn}>
            <Link to={ROUTES.ALLSALES}>
              <SmallButton textSmallBtn="All sales" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SalesBlock;
