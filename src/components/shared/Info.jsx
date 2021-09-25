import DateTime from "./DateTime";
import Text from "./Text";

export default function Info({ parcel, translation }) {
  const { sender, eta, verification_required } = parcel;
  return (
    <div className="sender">
      <Text is={sender} label={translation.from} />
      <DateTime of={translation.arrival} date={eta} />
    </div>
  );
}
