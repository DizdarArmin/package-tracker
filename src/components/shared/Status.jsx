export default function Status({ parcel, translation }) {
  const { status, verification_required } = parcel;
  let packageStatus;
  let iconClass;

  if (status === "delivered") {
    packageStatus = translation.delivered;
    iconClass = `fas fa-check-circle`;
  } else if (status === "on-the-way") {
    packageStatus = translation.onTheWway;
    iconClass = "fas fa-shipping-fast";
  } else if (status === "order-info-received") {
    packageStatus = translation.orderInfoReceived;
    iconClass = `fas fa-info-circle`;
  } else if (status === "ready-for-pickup") {
    packageStatus = translation.readyForPickUp;
    iconClass = `fas fa-box-open`;
  }
  return (
    <div className="status">
      <i className={`fa-3x icon ${iconClass}`}></i>
      <h3 className="status">
        <span className="margin-b">{packageStatus}</span>
      </h3>
      {verification_required && <h5>{translation.verification}</h5>}
    </div>
  );
}
