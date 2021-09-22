import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

export default function Map({ lat, lng, locationName }) {
  return (
    <div className="map">
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat, lng }}
        defaultZoom={13}
      >
        <MapMarker lat={lat} lng={lng} locationName={locationName} />
      </GoogleMapReact>
    </div>
  );
}
