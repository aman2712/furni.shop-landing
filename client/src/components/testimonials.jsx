import classes from "../styles/testimonials.module.css";
import person1 from "../assets/user-1.jpg";
import person2 from "../assets/user-2.jpg";
import person3 from "../assets/user-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
      <h1>What our happy clients say</h1>
      <p>
        Testimonials Highlighting Our Commitment to Quality, Exceptional
        Service, and Customer Satisfaction
      </p>
      <div className={classes.content}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          className={classes.slider}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
        >
          <SwiperSlide className={classes.slide}>
            <img src={person1} alt="Testimonial 1" />
            <div className={classes.slideContent}>
              <p>
                Furni.shop transformed my living space with their beautiful and
                affordable furniture. This 5% cashback was a delightful bonus
              </p>
              <h1>David Miller</h1>
              <h4>Real Estate Agent</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <img src={person2} alt="Testimonial 2" />
            <div className={classes.slideContent}>
              <p>
                Exceptional quality and service! The furniture is stunning, and
                the 30-day payment terms made it incredibly convenient.
              </p>
              <h1>Sarah Thompson</h1>
              <h4>Interior Designer</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <img src={person3} alt="Testimonial 3" />
            <div className={classes.slideContent}>
              <p>
                The 30-day terms made it easy for us to furnish our new home
                without financial stress. Highly recommended!
              </p>
              <h1>Michael Lee</h1>
              <h4>Entrepreneur</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
