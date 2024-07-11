import classes from "../styles/about.module.css";
import aboutImg from "../assets/about.png";
import { BounceAnimation } from "./animation";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutHeader}>
        <div>
          <h1>About Us</h1>
          <p>
            Our passion for exceptional craftsmanship drives us to curate the
            best pieces for every room in your house.
          </p>
        </div>
        <button>Learn More</button>
      </div>
      <div className={classes.aboutContent}>
        <div className={classes.aboutText}>
          <BounceAnimation>
            <h1>1.</h1>
            <h3>Who we are</h3>
            <p>
              You get a 2-week free trail to kick the Smaert tries. We want you
              to.
            </p>
          </BounceAnimation>
          <BounceAnimation>
            <h1>2.</h1>
            <h3>What do we do</h3>
            <p>
              We give you a free course that guides you through the process.
            </p>
          </BounceAnimation>
          <BounceAnimation>
            <h1>3.</h1>
            <h3>How do we help</h3>
            <p>Use our multimedis lectures, videos, and coaching sessions.</p>
          </BounceAnimation>
          <BounceAnimation>
            <h1>4.</h1>
            <h3>Create success story</h3>
            <p>
              With access to online learning resources anyone can transform.
            </p>
          </BounceAnimation>
        </div>
        <img src={aboutImg} alt="About Section" />
      </div>
    </div>
  );
};

export default About;
