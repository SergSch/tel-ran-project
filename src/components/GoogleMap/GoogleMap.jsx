import classes from './GoogleMap.module.css';
import { useSelector } from 'react-redux';

const GoogleMap = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409560597895!2d13.370224488013855!3d52.50792676508727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1708180925927!5m2!1sru!2sde"
      width="600"
      height="450"
      style={{ border: '0', filter: theme === 'dark' ? 'invert(100%)' : '' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`${classes.map}`}
    ></iframe>
  );
};
export default GoogleMap;
