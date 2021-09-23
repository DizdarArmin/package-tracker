import { Link } from "react-router-dom";
import { language } from "./shared/Atom";
import { useRecoilState } from "recoil";
import { save } from "../services/LocalStorage";
import sv from "../lang/sv.json";
import en from "../lang/en.json";

export default function Navbar() {
  const [lang, setLang] = useRecoilState(language);

  function switchLanguge() {
    if (lang.name === "English") {
      setLang(sv);
      save("language", sv);
    } else if (lang.name === "Svenska") {
      setLang(en);
      save("language", en);
    }
  }

  return (
    <nav className="navigation">
      <Link to="/">
        <div className="navbar-brand">Deliware</div>
      </Link>
      <div onClick={() => switchLanguge()} className="language">
        {lang.symbol}
      </div>
    </nav>
  );
}
