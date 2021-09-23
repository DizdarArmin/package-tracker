import Status from "./shared/Status";
import Info from "./shared/Info";
import { Link } from "react-router-dom";

import { language } from "./shared/Atom";
import { useRecoilState } from "recoil";
export default function PackageCard({ item }) {
  const [lang] = useRecoilState(language);
  // prettier-ignore
  const {status,sender,eta,verification_required,parcel_id,} = item;

  return (
    <section className="card" key={item.id}>
      <Info
        sender={sender}
        eta={eta}
        verification_required={verification_required}
      />
      <br />
      <Status status={status} />
      <br />
      <Link to={`/packages/${parcel_id}`}>
        <div className="button btn-details">{lang.showDetails}</div>
      </Link>
    </section>
  );
}
