import { useRecoilState } from "recoil";
import { language } from "./Atom";

export default function Verifed({ isVerifed }) {
  const [lang] = useRecoilState(language);
  let verifiedIcon;
  !isVerifed
    ? (verifiedIcon = `margin-l fas fa-check-circle`)
    : (verifiedIcon = `margin-l fas fa-times-circle`);
  return (
    <h3 className="padding-b">
      {lang.verified}
      <i className={verifiedIcon}></i>
    </h3>
  );
}
