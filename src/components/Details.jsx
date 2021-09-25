import Column from "./shared/Column";
import Status from "./shared/Status";
import DetailsFrom from "./shared/DetailsFrom";
import DetailsTo from "./shared/DetailsTo";
import Map from "./Map";
import Verification from "./shared/Verification";

import { useRecoilState } from "recoil";
import { language } from "../components/shared/Atom";

export default function Details({ parcel }) {
  const [translation] = useRecoilState(language);
  return (
    <section className="container">
      <h2 className="heading">{translation.detailsHeading}</h2>
      <div className="grid">
        <Column>
          <>
            <Status parcel={parcel} translation={translation} />
            <Verification parcel={parcel} translation={translation} />
          </>
        </Column>
        <DetailsFrom parcel={parcel} translation={translation} />
        <DetailsTo parcel={parcel} translation={translation} />
      </div>

      <Map parcel={parcel} />
    </section>
  );
}
