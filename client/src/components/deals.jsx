import classes from "../styles/deals.module.css";
import { BsCash } from "react-icons/bs";
import { IoIosCalendar } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { ZoomAnimation } from "./animation.jsx";

const Deals = () => {
  return (
    <section className={classes.deals}>
      <ZoomAnimation>
        <h1 className={classes.title}>Hot 🔥 deals for you</h1>
        <p className={classes.subtitle}>
          Online shopping for retail sales direct to consumers
        </p>
      </ZoomAnimation>
      <ZoomAnimation>
        <BsCash size={30} />
        <h3>1.5% Cashback</h3>
        <p>Earn a 5% cashback reward on every furniture purchase you make!</p>
      </ZoomAnimation>
      <ZoomAnimation>
        <IoIosCalendar size={30} />
        <h3>30 day terms </h3>
        <p>
          Take advantage of our 30-day payment terms, completely interest-free!
        </p>
      </ZoomAnimation>
      <ZoomAnimation>
        <MdCurrencyRupee size={30} />
        <h3>Save money</h3>
        <p>
          Discover unbeatable prices and save big money on top-quality
          furniture!
        </p>
      </ZoomAnimation>
    </section>
  );
};

export default Deals;
