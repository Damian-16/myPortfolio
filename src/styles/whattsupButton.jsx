import { useSpring , animated } from "react-spring";
import { getStyles  } from "./styles";

export const WhatsappButton = () => {
    const styles = getStyles();
    const animatedStyles = useSpring({
      from: { transform: 'translateY(0)' },
      to: async (next) => {
        while (true) {
          await next({ transform: 'translateY(-10px)' });
          await next({ transform: 'translateY(0)' });
        }
      },
      config: { duration: 500, tension: 200, friction: 10 },
      loop: true,
    });
  
    return (
      <animated.button style={{ ...styles.wspButton, ...animatedStyles }}>
     
      </animated.button>
    );
  };