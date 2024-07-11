import classes from "../styles/banner.module.css";
import { ScaleAnimation } from "./animation";

const Banner = () => {
  return (
    <section className={classes.banner}>
      <ScaleAnimation>
        <div className={classes.bannerContent}>
          <h1>We Help You Make Modern Interior</h1>
          <p>
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer.
          </p>
        </div>
      </ScaleAnimation>
    </section>
  );
};

export default Banner;
