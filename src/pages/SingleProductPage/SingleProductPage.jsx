import ProductAndCartTitle from '../../components/ProductAndCartTitle/ProductAndCartTitle';
import classes from './SingleProductPage.module.css';
import like from '../../assets/images/header/like.svg';
import { useGetAllGoodsQuery } from '../../store/reducers/apiGoodsSlice';
import TitleH2 from '../../components/TitleH2/TitleH2';
import TitleThrough from '../../components/TitleThrough/TitleThrough';
import ElementDiscount from '../../UI/ElementDiscount/ElementDiscount';
import AddAndDeleteButtonsBlock from '../../components/AddAndDeleteButtonsBlock/AddAndDeleteButtonsBlock';
import AddProductBtn from '../../UI/AddProductBtn/AddProductBtn';
import DescriptionAndFilterTitle from '../../components/DescriptionAndFilterTitle/DescriptionAndFilterTitle';
import { useSelector } from 'react-redux';
import ShowMoreAndLessText from '../../components/ShowMoreAndLessText/ShowMoreAndLessText';
import ProductModal from '../../components/ProductModal/ProductModal';
import { useState } from 'react';

const SingleProductPage = () => {
  const { theme } = useSelector((state) => state.theme);
  const [modalActive, setModalActive] = useState(false);

  const { data, isLoading, isError, error } = useGetAllGoodsQuery();
  const discountPrice = data[0]?.discont_price;
  const price = data[0]?.price;
  const percentDiscount = Math.round(((price - discountPrice) / price) * 100);

  return (
    <div className={`${classes.wrap} ${theme === 'dark' ? classes.dark : ''}`}>
      <ProductModal active={modalActive} setActive={setModalActive}>
        <img
          src={`http://localhost:3333/${data[0]?.image}`}
          alt={data[0]?.title}
        />
      </ProductModal>
      {isError ? <h3>Your page is {error.data.error}</h3> : null}
      <div className="container">
        <div className={classes.wrapper}>
          <div className="breadCrumbs"></div>
          <div className={classes.mainBlock}>
            {isLoading && (
              <div className="loading">
                <div className="loading_content"></div>
              </div>
            )}
            <div className={classes.imgBlock}>
              <img
                src={`http://localhost:3333/${data[0]?.image}`}
                alt={data[0]?.title}
                onClick={() => setModalActive(true)}
              />
              <div className={classes.discountWrapImg}>
                {discountPrice ? (
                  <ElementDiscount discount={percentDiscount} />
                ) : null}
              </div>
            </div>

            <div className={classes.titleBlock}>
              <ProductAndCartTitle text={data[0]?.title} />
              <img
                src={like}
                alt="Heart"
                className={theme === 'dark' ? classes.menuDark : ''}
              />
            </div>
            <div className={classes.priceBlock}>
              <TitleH2
                text={discountPrice ? `$${discountPrice}` : `$${price}`}
              />

              {discountPrice ? <TitleThrough text={`${'$' + price}`} /> : null}
              <div className={classes.discountWrap}>
                {discountPrice ? (
                  <ElementDiscount discount={percentDiscount} />
                ) : null}
              </div>
            </div>
            <div className={classes.btnBlock}>
              <AddAndDeleteButtonsBlock />
              <AddProductBtn text="Add to cart" />
            </div>
            <div className={classes.descriptionBlock}>
              <DescriptionAndFilterTitle text="Description"  />
              <ShowMoreAndLessText text={data[0]?.description} quantity={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProductPage;
