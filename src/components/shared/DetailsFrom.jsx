import Text from "./Text";
import DateTime from "./DateTime";
import Column from "./Column";
export default function DetailsFrom({ parcel, translation }) {
  const { sender, parcel_id, last_updated } = parcel;
  return (
    <Column>
      <Text is={sender} label={translation.from} />
      <Text is={parcel_id} label={translation.packageID} />
      <DateTime of={translation.update} date={last_updated} />
    </Column>
  );
}
