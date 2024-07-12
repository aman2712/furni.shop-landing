import classes from "../styles/products.module.css";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import product4 from "../assets/product-4.png";
import product5 from "../assets/product-5.png";
import product6 from "../assets/product-6.png";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

const Products = () => {
  const [loading, data, error, trigger] = useFetch({
    endpoint: "/products",
    method: "GET",
  });

  useEffect(() => {
    trigger();
  }, []);
  return (
    <div className={classes.products} id="products">
      <h1 className={classes.title}>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={classes.productsGrid}>
          <div className={classes.product}>
            <h3>Stackable Chair</h3>
            <p>$87.00</p>
            <div className={classes.imgContainer}>
              <img src={product1} alt="Product 1" />
            </div>
          </div>
          <div className={classes.product}>
            <h3>Lamp Tool</h3>
            <p>$35.00</p>
            <div className={classes.imgContainer}>
              <img src={product2} alt="Product 1" />
            </div>
          </div>
          <div className={classes.product}>
            <h3>Dining Chair</h3>
            <p>$55.00</p>
            <div className={classes.imgContainer}>
              <img src={product3} alt="Product 1" />
            </div>
          </div>
          <div className={classes.product}>
            <h3>Hand Base Lamp</h3>
            <p>$35.00</p>
            <div className={classes.imgContainer}>
              <img src={product4} alt="Product 1" />
            </div>
          </div>
          <div className={classes.product}>
            <h3>Stylish Chair</h3>
            <p>$45.00</p>
            <div className={classes.imgContainer}>
              <img src={product5} alt="Product 1" />
            </div>
          </div>
          <div className={classes.product}>
            <h3>Vintage Chair</h3>
            <p>$65.00</p>
            <div className={classes.imgContainer}>
              <img src={product6} alt="Product 1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
