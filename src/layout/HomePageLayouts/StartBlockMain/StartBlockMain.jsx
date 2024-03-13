import StartBlockButton from '../../../UI/StartBlockButton/StartBlockButton';
import classes from './StartBlockMain.module.css';

const StartBlockMain = () => {
  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.titleBlock}>
          <h1 className={classes.title}>
            Amazing Discounts on Garden Products!
          </h1>
          <StartBlockButton text="Check out" />
        </div>
      </div>
    </div>
  );
};
export default StartBlockMain;
