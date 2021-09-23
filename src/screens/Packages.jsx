import PackageCard from "../components/PackageCard";
import Loading from "./Loading";

import { save } from "../services/LocalStorage";
import useFetch from "../hooks/useFetch";

export default function Packages() {
  const URL = `https://my.api.mockaroo.com/insta-orders.json?key=e49e6840`;
  const { data: packages, error, loading } = useFetch(URL);
  if (true) {
  }
  if (packages) save("packages", packages);
  if (error) throw error;
  if (loading) return <Loading />;

  return (
    <div>
      {packages && (
        <div className="container">
          <div className="grid">
            {packages.map((item) => (
              <PackageCard key={item.parcel_id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
