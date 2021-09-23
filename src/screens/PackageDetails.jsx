import { useState } from "react";
import { useParams } from "react-router-dom";
import { load } from "../services/LocalStorage";
import { useRecoilState } from "recoil";
import { language } from "../components/shared/Atom";

import Verified from "../components/shared/Verifed";
import Status from "../components/shared/Status";
import DateTime from "../components/shared/DateTime";
import Phone from "../components/shared/Phone";
import Column from "../components/shared/Column";
import Text from "../components/shared/Text";
import Map from "../components/Map";
import Notes from "../components/shared/Notes";

export default function PackageDetails() {
  const [lang] = useRecoilState(language);
  const { id } = useParams();
  const [packages] = useState(load("packages"));
  const parcel = packages.find((item) => item.parcel_id === id);
  //prettier-ignore
  const {sender,parcel_id,verification_required,
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
          <Verified verification_required={verification_required} />
          <DateTime of={lang.update} date={last_updated} />
        </Column>

        <Column>
          <Text is={user_name} label={lang.to} />
          <Phone number={user_phone} />
          <Text is={location_name} label={lang.pickup} />
          <DateTime of={lang.arrival} date={eta} />
          {notes && <Notes notes={notes} label={lang.notes} />}
        </Column>
      </div>
      <Map lat={lat} lng={lng} locationName={location_name} />
    </section>
  );
}
