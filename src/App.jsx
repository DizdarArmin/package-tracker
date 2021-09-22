import "./App.css";
import "./styles/layout.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import PackageDetails from "./screens/PackageDetails";
import Packages from "./screens/Packages";

import { language } from "./components/Atom";
import { useRecoilState } from "recoil";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { load } from "./services/LocalStorage";
import { useEffect } from "react";

export default function App() {
  const [lang, setLang] = useRecoilState(language);
  let localLanguage = load("language");

  useEffect(() => {
    if (localLanguage) {
      setLang(localLanguage);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/packages" exact component={Packages} />
        <Route path="/packages/:id" component={PackageDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}
