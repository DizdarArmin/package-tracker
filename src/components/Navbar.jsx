import { Link } from "react-router-dom";
import { language } from "./shared/Atom";
import { useRecoilState } from "recoil";
import { save } from "../services/LocalStorage";
import sv from "../lang/sv.json";
import en from "../lang/en.json";

export default function Navbar() {
  const [translation, setTranslation] = useRecoilState(language);

  function switchLanguge() {
    if (translation.name === "English") {
      setTranslation(sv);
      save("language", sv);
    } else if (translation.name === "Svenska") {
      setTranslation(en);
      save("language", en);
    }
  }

  return (
    <nav className="navigation">
      <Link to="/">
        <div className="navbar-brand">Deliware</div>
      </Link>
      <div onClick={() => switchLanguge()} className="language">
        {translation.symbol}
      </div>
    </nav>
  );
}
