import Status from "./shared/Status";
import Info from "./shared/Info";
import { Link } from "react-router-dom";

import { language } from "./shared/Atom";
import { useRecoilState } from "recoil";
export default function PackageCard({ item }) {
  const [translation] = useRecoilState(language);

  const { parcel_id } = item;

  return (
    <section className="card">
      <Info parcel={item} translation={translation} />
      <br />
      <Status parcel={item} translation={translation} />
      <br />
      <Link to={`/packages/${parcel_id}`}>
        <div className="button btn-details">{translation.showDetails}</div>
      </Link>
    </section>
  );
}
