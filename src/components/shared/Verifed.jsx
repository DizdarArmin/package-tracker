import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useRecoilState } from "recoil";
import { language } from "./Atom";

export default function Verifed({ verification_required }) {
  const [lang] = useRecoilState(language);
  const [icon, setIcon] = useState();
  useEffect(() => {
    verification_required
      ? setIcon(`margin-l fas fa-times-circle`)
      : setIcon(`margin-l fas fa-check-circle`);
  }, []);

  return (
    <h3 className="padding-b">
      {lang.verified}
      <i className={icon}></i>
    </h3>
  );
}
