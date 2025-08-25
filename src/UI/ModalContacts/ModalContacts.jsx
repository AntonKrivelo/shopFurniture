import './ModalContacts.css';

const ModalContacts = ({ onClose }) => {
  return (
    <div className="modal__overlay-contacts" onClick={onClose}>
      <div className="modal__contacts">
        <h2 className="modal__contacts-title">Наши Контакты</h2>
        <ul className="contacts__items">
          <li className="contacts__item">
            <strong>MTC</strong> - 909833312
          </li>
          <li className="contacts__item">
            <strong>A1</strong> - 909833312
          </li>
          <li className="contacts__item">
            <strong>Bioline</strong> - 909833312
          </li>
        </ul>
        <button className="contacts__btn" onClick={onClose}>
          Закрыть контакты
        </button>
      </div>
    </div>
  );
};

export default ModalContacts;
