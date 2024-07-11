import classes from "../styles/animation.module.css";
import { useAnimation } from "../hooks/useAnimation";

export const ScaleAnimation = ({ children }) => {
  const [fadeInVisible, fadeRef] = useAnimation();
  return (
    <div
      className={`${classes.fadeIn} ${fadeInVisible ? classes.visible : ""}`}
      ref={fadeRef}
    >
      {children}
    </div>
  );
};

export const ZoomAnimation = ({ children }) => {
  const [zoomVisible, zoomRef] = useAnimation();

  return (
    <div
      className={`${classes.zoom} ${zoomVisible ? classes.visible : ""}`}
      ref={zoomRef}
    >
      {children}
    </div>
  );
};

export const BounceAnimation = ({ children }) => {
  const [bounceVisible, bounceRef] = useAnimation();

  return (
    <div
      className={`${classes.bounce} ${bounceVisible ? classes.visible : ""}`}
      ref={bounceRef}
    >
      {children}
    </div>
  );
};
