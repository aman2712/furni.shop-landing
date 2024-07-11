import classes from "../styles/footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerGrid}>
        <div>
          <h1 className={classes.logo}>furni.shop</h1>
          <p className={classes.desc}>
            Join us in transforming your living spaces with furniture that
            blends elegance and practicality seamlessly.
          </p>
          <div className={classes.links}>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedin />
            <FaPinterestP />
          </div>
        </div>
        <div className={classes.services}>
          <h4>Services</h4>
          <a href="#">Contact Us</a>
          <a href="#">Press</a>
          <a href="#">Payroll</a>
          <a href="#">Library</a>
          <a href="#">Blog</a>
          <a href="#">Help Center</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#">Pricing</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Support</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#">Contact</a>
          <a href="#">Affiliates</a>
          <a href="#">Sitemap</a>
          <a href="#">Cancellation Policy</a>
          <a href="#">Security</a>
        </div>
      </div>
      <p className={classes.copyright}>
        Copyright © 2024 Md Aman Khan. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
