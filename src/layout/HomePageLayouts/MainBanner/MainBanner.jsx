import MainBannerButton from "../../../UI/MainBannerButton/MainBannerButton";
import classes from "./MainBanner.module.css";

export const MainBanner = () => {
  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.titleBlock}>
          <h1 className={classes.title}>
            Amazing Discounts on Garden Products!
          </h1>
          <MainBannerButton text="Check out" />
        </div>
      </div>
    </div>
  );
};
export default MainBanner;
