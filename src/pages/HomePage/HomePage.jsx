import { useGetAllCategoriesQuery } from '../../store/reducers/apiCatigoriesSlice';
import classes from './HomePage.module.css';

const HomePage = () => {
  const { data, isLoading, isError } = useGetAllCategoriesQuery();

  console.log(data);
  return (
    <div>
      {data?.slice(0, 4).map((elem) => (
        <p key={elem.id}>{elem.title}</p>
      ))}
    </div>
  );
};
export default HomePage;
