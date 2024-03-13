import { useEffect } from 'react';
import { useGetAllGoodsQuery } from '../../store/reducers/apiGoodsSlice';
import classes from './AllProductsPage.module.css';

export default function AllProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading, isError } = useGetAllGoodsQuery();
  // console.log(data);

  const discountedProducts = data?.filter((product) => product.discont_price);
  const shuffledProducts = discountedProducts?.sort(() => Math.random() - 0.5);

  // const findBiggestDiscount = (arr) => {
  //   let mostDiscountObj;
  //   const halfDiscountProducts = arr
  //     ?.filter((product) => product.discont_price !== null)
  //     .reduce((acc, elem) => {
  //       const prcnt = Math.round(
  //         ((elem.price - elem.discont_price) / elem.price) * 100
  //       );

  //       acc.push(prcnt);

  //       return acc;
  //     }, []);
  //   return Math.max(...halfDiscountProducts);
  // };

  // console.log(findBiggestDiscount(data));

  // ---------------------------------------------

  // const findBiggestDiscount = (arr) => {
  //   let mostDiscountObj;

  //   const discountedProducts = arr
  //     ?.filter((product) => product.discont_price !== null)
  //     .map((product) => ({
  //       ...product,
  //       discountPercentage: Math.round(
  //         ((product.price - product.discont_price) / product.price) * 100
  //       ),
  //     }));

  //   const maxDiscountPercentage = Math.max(
  //     ...discountedProducts?.map((product) => product.discountPercentage)
  //   );

  //   mostDiscountObj = discountedProducts.find(
  //     (product) => product.discountPercentage === maxDiscountPercentage
  //   );

  //   return mostDiscountObj;
  // };

  // console.log(findBiggestDiscount(data));

  return (
    <div>
      {shuffledProducts
        ?.slice(0, 4)
        .map(({ id, title, discount_price, image }) => (
          // <p key={id}>{title}</p>
          <img src={image} alt={title} />
        ))}
    </div>
  );
}
