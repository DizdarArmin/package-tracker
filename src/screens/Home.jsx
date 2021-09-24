import { Link } from "react-router-dom";
import { language } from "../components/shared/Atom";
import { useRecoilState } from "recoil";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  const [translation] = useRecoilState(language);
  const titleRef = useRef();
  const subtitleRefLeft = useRef();
  const subtitleRefRight = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 2 }
    );
    gsap.fromTo(
      subtitleRefLeft.current,
      { x: "-200", opacity: 0 },
      { x: "0", opacity: 1, duration: 2, delay: 2 }
    );
    gsap.fromTo(
      subtitleRefRight.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 4 }
    );
  });
  return (
    <div className="home">
      <h1 ref={titleRef}>{translation.homeTitle}</h1>
      <div className="slogan margin-b">
        <h2 ref={subtitleRefLeft}>{translation.homeSubtitleOne}</h2>
        <h2 ref={subtitleRefRight}>{translation.homeSubtitleTwo}</h2>
      </div>

      <Link to="/packages">
        <div ref={buttonRef} className="button">
          {translation.homeButton}
        </div>
      </Link>
    </div>
  );
}
