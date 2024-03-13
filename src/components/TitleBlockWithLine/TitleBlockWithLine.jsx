import { Link } from 'react-router-dom';
import Line from '../../UI/Line/Line';
import TitleH2 from '../TitleH2/TitleH2';
import classes from './TitleBlockWithLine.module.css';
import SmallButton from '../../UI/SmallButton/SmallButton';

const TitleBlockWithLine = ({ text, textSmallBtn, link }) => {
  return (
    <div className={classes.wrapper}>
      <TitleH2 text={text} />
      <div className={classes.btn_block}>
        <Line />
        <div className={classes.topSmallBtn}>
          <Link to={link}>
            <SmallButton textSmallBtn={textSmallBtn} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TitleBlockWithLine;
