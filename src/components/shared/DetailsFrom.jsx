import Text from "./Text";
import Verified from "./Verified";
import DateTime from "./DateTime";
import Column from "./Column";
export default function DetailsFrom({ parcel, translation }) {
  const { sender, parcel_id, verification_required, last_updated } = parcel;
  return (
    <Column>
      <Text is={sender} label={translation.from} />
      <Text is={parcel_id} label={translation.packageID} />
      <Verified verification_required={verification_required} />
      <DateTime of={translation.update} date={last_updated} />
    </Column>
  );
}
