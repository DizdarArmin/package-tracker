import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

export default function Map({ parcel }) {
  const {
    location_coordinate_latitude: lat,
    location_coordinate_longitude: lng,
    location_name,
  } = parcel;

  return (
    <div className="map">
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat, lng }}
        defaultZoom={15}
      >
        <MapMarker lat={lat} lng={lng} locationName={location_name} />
      </GoogleMapReact>
    </div>
  );
}
