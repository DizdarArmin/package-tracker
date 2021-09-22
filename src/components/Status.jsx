import { language } from "../components/Atom";
import { useRecoilState } from "recoil";

export default function Status({ status }) {
  const [lang] = useRecoilState(language);
  let packageStatus;
  let iconClass;

  if (status === "delivered") {
    packageStatus = lang.delivered;
    iconClass = `fas fa-check-circle`;
  } else if (status === "on-the-way") {
    packageStatus = lang.onTheWway;
    iconClass = "fas fa-shipping-fast";
  } else if (status === "order-info-received") {
    packageStatus = lang.orderInfoReceived;
    iconClass = `fas fa-info-circle`;
  } else if (status === "ready-for-pickup") {
    packageStatus = lang.readyForPickUp;
    iconClass = `fas fa-box-open`;
  }
  return (
    <div className="status">
      <h3 className="status">
        <i className={`fa-3x icon ${iconClass}`}></i>
        <br />
        <span className="margin-b">{packageStatus}</span>
      </h3>
    </div>
  );
}
