import FormPost from '../FormPost/FormPost';
import image from '../../assets/images/homePage/image_form.png';
import classes from './GetDiscount.module.css'

const GetDiscount = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
          <h2 className={classes.title}>
            <p className={classes.p} >5% off on the first order</p>
          </h2>
        <article className={classes.container_form}>
        <img className={classes.image} src={image} alt="Image" />
          <FormPost />
        </article>
      </div>
    </section>
  );
};

export default GetDiscount;