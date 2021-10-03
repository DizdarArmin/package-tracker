import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min.js";
import * as THREE from "three";

// Nice use of a custom component for your Vanta animation +1
// One detail though, Vanta eat a lof of resources, so i will mix it with a custom hook for detecting media queries,
// in order to skip the 3d animation on mobile devices. (tables are ok though)
export default function Vanta({ children }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1,

          points: 6.0,
          maxDistance: 35.0,
          spacing: 30.0,
          color: 0xfffff,
          backgroundColor: 0x00a793,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="home" ref={vantaRef}>
      {children}
    </div>
  );
}
