import { useState } from "react";
import Modal from "../Modal";
export default function Notes({ notes, label }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="notes" onClick={() => setIsOpen(true)}>
        <h3>{label}Show notes</h3>
      </div>
      <Modal
        setIsOpen={setIsOpen}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h3 className="note">{notes}</h3>
      </Modal>
    </>
  );
}
