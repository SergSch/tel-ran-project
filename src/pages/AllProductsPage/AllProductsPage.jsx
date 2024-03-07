import { useGetAllGoodsQuery } from '../../store/reducers/apiGoodsSlice';
import classes from './AllProductsPage.module.css';

export default function AllProductsPage() {
  const { data, isLoading, isError } = useGetAllGoodsQuery();
  console.log(data);

  // Filter items with discount
  const discountedProducts = data?.filter((product) => product.discont_price);

  const shuffledProducts = discountedProducts?.sort(() => Math.random() - 0.5);

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
