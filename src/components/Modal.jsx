import ReactDom from "react-dom";
export default function Modal({ children, open, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="overlay" onClick={() => onClose()}>
      <div className="modal">{children}</div>
    </div>,
    document.getElementById("portal")
  );
}
