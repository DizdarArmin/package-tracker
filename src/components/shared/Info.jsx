import Verifed from "./Verifed";
import DateTime from "./DateTime";
import Text from "./Text";
import { language } from "./Atom";
import { useRecoilState } from "recoil";

export default function Info({ sender, eta, verified }) {
  const [lang] = useRecoilState(language);
  return (
    <div className="sender">
      <Text is={sender} label={lang.from} />
      <DateTime of={lang.arrival} date={eta} />
      <Verifed isVerifed={verified} />
    </div>
  );
}
