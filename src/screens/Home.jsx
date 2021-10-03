import { Link } from "react-router-dom";
import { language } from "../components/shared/Atom";
import { useRecoilState } from "recoil";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Vanta from "../components/shared/Vanta";

export default function Home() {
  const [translation] = useRecoilState(language);
  const titleRef = useRef();
  const subtitleRefLeft = useRef();
  const subtitleRefRight = useRef();
  const buttonRef = useRef();

  // Example of how to extra the GS animation info into a separate constant stored in another file
  const tween1 = {
    reference: "some-css-class",
    start: { opacity: 0, y: -200 },
    end: { opacity: 1, y: 0, duration: 2 },
  };
  // application
  // gsap.fromTo(tween1.reference, tween1.start, tween1.end);

  useEffect(() => {
    // have you read the documentation about "gsap". I dont know this library, but if allows to point to DOM elements using CSS classes or even id's you can store this information in a json file.
    // the coordinates could be easily be stored in a separated json OR js object.

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 2 }
    );
    gsap.fromTo(
      subtitleRefLeft.current,
      { x: -200, opacity: 0 },
      { x: "0", opacity: 1, duration: 2, delay: 2 }
    );
    gsap.fromTo(
      subtitleRefRight.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 4 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 5 }
    );
  }, []);
  return (
    <Vanta>
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
    </Vanta>
  );
}
