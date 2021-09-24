import { useRecoilState } from "recoil";
import { language } from "./Atom";

export default function Verifed({ verification_required }) {
  const [lang] = useRecoilState(language);
  let icon;
  verification_required
    ? (icon = `margin-l fas fa-times-circle`)
    : (icon = `margin-l fas fa-check-circle`);

  return (
    <h3 className="padding-b">
      {lang.verified}
      <i className={icon}></i>
    </h3>
  );
}
