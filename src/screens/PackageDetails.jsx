import { useState } from "react";
import { useParams } from "react-router-dom";
import { load } from "../services/LocalStorage";

import Details from "../components/Details";
import PageNotFound from "./PageNotFound";

export default function PackageDetails() {
  const { id } = useParams();
  const [packages] = useState(load("packages"));
  const parcel = packages.find((item) => item.parcel_id === id);

  if (!parcel) return <PageNotFound />;
  return <Details parcel={parcel} />;
}
