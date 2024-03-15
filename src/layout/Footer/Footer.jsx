import classes from './Footer.module.css';
import instagram from '../../assets/images/footer/instagram.svg';
import whatsapp from '../../assets/images/footer/whatsapp.svg';
import TitleH2 from './../../components/TitleH2/TitleH2';
import FooterSmallTitle from '../../components/FooterSmallTitle/FooterSmallTitle';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <footer className={` ${theme === 'dark' ? classes.dark : ''}`}>
     
        <div className={classes.wrapper}>
          <TitleH2 text="Contact" />
          <div className={classes.contact_block}>
            <div className={classes.top_block}>
              <div
                className={`${classes.phone_box} ${classes.box} ${
                  theme === 'dark' ? classes.lightDark : ''
                }`}
              >
                <FooterSmallTitle text="Phone" />
                <a
                  className={`${classes.text} ${
                    theme === 'dark' ? classes.white : ''
                  }`}
                  href="tel:+499999999999"
                >
                  +49 999 999 99 99
                </a>
              </div>
              <div
                className={`${classes.social_box} ${classes.box} ${
                  theme === 'dark' ? classes.lightDark : ''
                }`}
              >
                <FooterSmallTitle text="Socials" />
                <div className={classes.social}>
                  <img
                    src={instagram}
                    alt="instagram"
                    className={` ${theme === 'dark' ? classes.menuDark : ''}`}
                  />
                  <img
                    src={whatsapp}
                    alt="whatsapp"
                    className={` ${theme === 'dark' ? classes.menuDark : ''}`}
                  />
                </div>
              </div>
            </div>
            <div className={classes.bottom_block}>
              <div
                className={`${classes.address} ${classes.box} ${
                  theme === 'dark' ? classes.lightDark : ''
                }`}
              >
                <FooterSmallTitle text="Address" />
                <p
                  className={`${classes.text} ${
                    theme === 'dark' ? classes.white : ''
                  }`}
                >
                  Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
                </p>
              </div>
              <div
                className={`${classes.work_hours} ${classes.box} ${
                  theme === 'dark' ? classes.lightDark : ''
                }`}
              >
                <FooterSmallTitle text="Working Hours" />
                <p
                  className={`${classes.text} ${
                    theme === 'dark' ? classes.white : ''
                  }`}
                >
                  24 hours a day
                </p>
              </div>
            </div>
          </div>
          <GoogleMap />
        </div>
      
    </footer>
  );
};
export default Footer;
