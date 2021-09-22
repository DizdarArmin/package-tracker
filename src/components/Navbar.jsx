import { Link } from "react-router-dom";
import { language } from "./Atom";
import { useRecoilState } from "recoil";
import { save } from "../services/LocalStorage";
import translation from "../lang/translations.json";

export default function Navbar() {
  const [lang, setLang] = useRecoilState(language);

  function switchLanguge() {
    if (lang.name === "English") {
      setLang(translation.sv);
      save("language", translation.sv);
    } else if (lang.name === "Svenska") {
      setLang(translation.en);
      save("language", translation.en);
    }
  }

  return (
    <nav className="navigation">
      <Link to="/">
        <div className="navbar-brand">Deliware</div>
      </Link>
      <div onClick={() => switchLanguge()} className="language">
        {lang.name}
      </div>
    </nav>
  );
}
