import { useEffect, useState, useRef } from "react";

export const useAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  });

  return [isVisible, domRef];
};
