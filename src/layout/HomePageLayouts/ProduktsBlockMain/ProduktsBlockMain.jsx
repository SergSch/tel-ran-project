import React from 'react';
import classes from './ProduktsBlockMain.module.css';
import { Link } from 'react-router-dom';
import SingleProduktCard from '../../../components/SingleProduktCard/SingleProduktCard'; 
import { useSelector } from 'react-redux';
import { useGetAllGoodsQuery } from '../../../store/reducers/apiGoodsSlice';



export default function ProduktsBlockMain() {
    const { theme } = useSelector((state) => state.theme);
  const { data, isLoading, isError } = useGetAllGoodsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred!</p>;


  // Filter items with discount and shuffle
  const shuffledProducts = data?.filter((product) => product.discount_price)
                                 .sort(() => Math.random() - 0.5);

  return (
    <div className={` ${theme === 'dark' ? classes.dark : ''}`}>
    <div className={classes.container}>
      {shuffledProducts?.slice(0, 4).map((product) => (
        <SingleProduktCard key={product.id} {...product} />
      ))}
    </div>
    </div>
  );
}