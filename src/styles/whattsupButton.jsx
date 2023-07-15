import { useSpring , animated, useTransition } from "react-spring";
import { getStyles  } from "./styles";
import { useEffect, useState } from "react";

export const WhatsappButton = () => {
    const styles = getStyles();
    const [isZoomed, setIsZoomed] = useState(false);

    const animatedStyles = useSpring({
      from: { transform: isZoomed ?'scale(1.3)':'scale(1)' },
      to: { transform: isZoomed ? 'scale(1.4)' : 'scale(1.2)' },
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
 
      <animated.button style={{ ...styles.wspButton, ...animatedStyles }}>
     
      </animated.button>
    );
  };