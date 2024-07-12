import classes from "../styles/navbar.module.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { GiTireIronCross } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const { isAuth, logout } = useContext(AuthContext);

  return (
    <>
      {/* navbar for desktop designs */}
      <nav className={classes.nav}>
        <Link to="/" className={classes.logo}>
          furni.shop
        </Link>
        <div className={classes.links}>
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <a href="/#products">Products</a>
          {isAuth ? (
            <a href="#" onClick={logout}>
              Logout
            </a>
          ) : (
            <Link to="/auth">Login</Link>
          )}
        </div>
        <div className={classes.search}>
          <div className={classes.inputContainer}>
            <input
              placeholder="Enter search term..."
              type="text"
              onBlur={() => setSearchActive(false)}
              id="search"
              style={{
                transform: searchActive ? "translateX(0)" : "translateX(100%)",
              }}
            />
          </div>
          <CiSearch
            onClick={() => setSearchActive(!searchActive)}
            fontWeight={800}
          />
        </div>
      </nav>
      {/* navbar for mobile phones */}
      <nav
        className={classes.mobileNav}
        style={{ "--navheight": toggleNav ? "20rem" : "6rem" }}
      >
        <div className={classes.mobileNavUpper}>
          <a href="#" className={classes.logo}>
            furni.shop
          </a>
          {toggleNav ? (
            <GiTireIronCross
              color="#f1f1f1"
              size={24}
              onClick={() => setToggleNav(!toggleNav)}
            />
          ) : (
            <BiMenuAltRight
              color="#f1f1f1"
              size={30}
              onClick={() => setToggleNav(!toggleNav)}
            />
          )}
        </div>
        <div className={classes.links}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
