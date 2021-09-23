import ReactDom from "react-dom";
export default function Modal({ children, open, onClose, setIsOpen }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={() => setIsOpen(false)}>
        <div className="modal">{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
