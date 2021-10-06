import { useState } from "react";
import { useParams } from "react-router-dom";

import { load } from "../services/LocalStorage";
import Column from "./shared/Column";
import Status from "./shared/Status";
import DetailsFrom from "./shared/DetailsFrom";
import DetailsTo from "./shared/DetailsTo";
import Verification from "./shared/Verification";
import Map from "./Map";
import PageNotFound from "./PageNotFound";

// This page should be merged with the Detail component -1
export default function PackageDetails() {
  const { id } = useParams();
  const [packages] = useState(load("packages"));
  const parcel = packages.find((item) => item.parcel_id === id);

  if (!parcel) return <PageNotFound />;
  return (
    <section className="container">
      <h2 className="heading">{translation.detailsHeading}</h2>

      {/* Here i see an interesting approach, but would be Column component better called Columns but the tags inside Colmns are just 2, and probably can be just 1 so no much is gained from doing so. -1 */}
      <div className="grid">
        <Column>
          {/* No need to <> here */}
          <Status parcel={parcel} translation={translation} />
          <Verification parcel={parcel} translation={translation} />
        </Column>
        <DetailsFrom parcel={parcel} translation={translation} />
        <DetailsTo parcel={parcel} translation={translation} />
      </div>

      <Map parcel={parcel} />
    </section>
  );
}
