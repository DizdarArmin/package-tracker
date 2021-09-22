import Status from "./Status";
import Info from "./Info";
import { Link } from "react-router-dom";

import { language } from "../components/Atom";
import { useRecoilState } from "recoil";
export default function PackageCard({ item }) {
  const [lang] = useRecoilState(language);
  // prettier-ignore
  const {status,sender,eta,verification_required: verified,parcel_id,} = item;

  return (
    <section className="card" key={item.id}>
      <Info sender={sender} eta={eta} verified={verified} />
      <br />
      <Status status={status} />
      <br />
      <Link to={`/packages/${parcel_id}`}>
        <div className="button btn-details">{lang.showDetails}</div>
      </Link>
    </section>
  );
}
