export default function MapMarker({ lat, lng, locationName }) {
  const location = `http://maps.google.com/maps?z=15&t=m&q=loc:${lat}+${lng}`;

  return (
    <a href={location} target="_blank" rel="noreferrer">
      <div className="marker" lat={lat} lng={lng}>
        <i className="fas fa-3x fa-crosshairs"></i>
        <h2> {locationName}</h2>
      </div>
    </a>
  );
}
