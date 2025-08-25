import './ModalAdd.css';

const ModalAdd = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        <button onClick={onClose}>Ок</button>
      </div>
    </div>
  );
};

export default ModalAdd;
