import { useEffect } from 'react';
import CategoriesBlockMain from '../../layout/HomePageLayouts/CategoriesBlockMain/CategoriesBlockMain';
import SalesBlock from '../../layout/HomePageLayouts/SalesBlock/SalesBlock';
import FormBlock from '../../layout/HomePageLayouts/FormBlock/FormBlock';
import MainBanner from '../../layout/HomePageLayouts/MainBanner/MainBanner';

const HomePage = () => {
  // opened page is displayed at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MainBanner />
      <CategoriesBlockMain />
      <FormBlock />
      <SalesBlock />
    </div>
  );
};
export default HomePage;
