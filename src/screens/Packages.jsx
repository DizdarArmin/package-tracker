import PackageCard from "../components/PackageCard";
import Loading from "./Loading";

import { save } from "../services/LocalStorage";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export default function Packages() {
  const { packages } = useParams();
  const URL = `https://my.api.mockaroo.com/insta-orders.json?key=e49e6840`;
  const { data, error, loading } = useFetch(URL);

  if (packages !== "packages") {
    return <PageNotFound />;
  }
  if (loading) return <Loading />;
  if (data) save("packages", data);
  if (error) throw error;
  return (
    <div className="h-100">
      {data && (
        <div className="container">
          <div className="grid">
            {data.map((item) => (
              <PackageCard key={item.parcel_id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
