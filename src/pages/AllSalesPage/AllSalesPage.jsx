import { useEffect } from 'react';
import classes from './AllSalesPage.module.css';

const AllSalesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className={classes.txt}>Hello World</h1>
    </div>
  );
};
export default AllSalesPage;
