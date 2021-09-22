import { useState } from "react";
import { useParams } from "react-router-dom";
import { load } from "../services/LocalStorage";
import { useRecoilState } from "recoil";
import { language } from "../components/Atom";

import Verified from "../components/Verifed";
import Status from "../components/Status";
import DateTime from "../components/DateTime";
import Phone from "../components/Phone";
import Column from "../components/Column";
import Text from "../components/Text";
import Map from "../components/Map";

export default function PackageDetails() {
  const [lang] = useRecoilState(language);
  const { id } = useParams();
  const [packages] = useState(load("packages"));
  const parcel = packages.find((item) => item.parcel_id === id);
  //prettier-ignore
  const {sender,parcel_id,verification_required: verified,
         last_updated, status, user_name, user_phone, notes,
         location_name, eta,location_coordinate_longitude :lng, 
         location_coordinate_latitude :lat} = parcel;

  return (
    <section className="container">
      <h2 className="heading">{lang.detailsHeading}</h2>
      <div className="grid">
        <Column>
          <Status status={status} />
        </Column>

        <Column>
          <Text is={sender} label={lang.from} />
          <Text is={parcel_id} label={lang.packageID} />
          <Verified isVerified={verified} />
          <DateTime of={lang.update} date={last_updated} />
        </Column>

        <Column>
          <Text is={user_name} label={lang.to} />
          <Phone number={user_phone} />
          <Text is={location_name} label={lang.pickup} />
          <DateTime of={lang.arrival} date={eta} />
          {notes && <Text is={notes} label={lang.note} />}
        </Column>
      </div>
      <Map lat={lat} lng={lng} locationName={location_name} />
    </section>
  );
}
