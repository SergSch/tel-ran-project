
import { Link } from "react-router-dom";
import MainBannerButton from "../../../UI/MainBannerButton/MainBannerButton";
import classes from "./MainBanner.module.css";
import { ROUTES } from "../../../utils/routes";

export const MainBanner = () => {
  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.titleBlock}>
          <h1 className={classes.title}>
            Amazing Discounts on Garden Products!
          </h1>
          <Link to={`${ROUTES.ALLPRODUCTS}?category=2`}>
            <MainBannerButton text="Check out" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainBanner;
