import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";
import { language } from "../components/shared/Atom";
import { gsap } from "gsap";
export default function Loading() {
  const [lang] = useRecoilState(language);
  const spinner = useRef();

  // here is ok to keep the animation info inside as is only 1
  useEffect(() => {
    gsap.to(spinner.current, {
      rotation: "360",
      duration: 3,
      repeat: -1,
    });
  });
  return (
    <div className="loading">
      <div ref={spinner} className="spinner margin-b">
        <div className="inside">
          <div className="circle c-1">
            <i className="fas fa-laptop"></i>
          </div>
          <div className="circle c-2">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="circle c-3">
            <i className="fab fa-safari"></i>
          </div>
          <div className="circle c-4">
            <i className="fas fa-shipping-fast"></i>
          </div>
        </div>
      </div>
      <h2 className="text-white">{lang.loading}...</h2>
    </div>
  );
}
