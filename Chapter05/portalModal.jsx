import { createPortal } from "react-dom";

const ModalWindow = ({ description, isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal">
      <span>{description}</span>
      <button onClick={onClose}>Close</button>
    </div>,
    document.body
  );
};
