import { useSpring, animated, useTransition } from "react-spring";
import { getStyles } from "./styles";
import { useEffect, useState } from "react";


const phoneNumber =  import.meta.env.REACT_APP_PHONE_NUMBER

export const WhatsappButton = () => {
  const styles = getStyles();
  const [isZoomed, setIsZoomed] = useState(false);
  const handleClick = () => {
    if (phoneNumber) {
      const message = "Hola Damian, ¿cómo estás?";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank");
    }
  };

  const animatedStyles = useSpring({
    from: { transform: isZoomed ? "scale(1.3)" : "scale(1)" },
    to: { transform: isZoomed ? "scale(1.4)" : "scale(1.2)" },
    config: { duration: 1000 },
    loop: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomed((prevIsZoomed) => !prevIsZoomed);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <animated.button
      onClick={handleClick}
      style={{ ...styles.wspButton, ...animatedStyles }}
    ></animated.button>
  );
};
