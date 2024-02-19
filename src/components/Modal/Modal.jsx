import { useState } from 'react';
import s from './Modal.module.css';

const Modal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.modalBox}>
      <button
        onClick={() => setOpen(true)}
        className={s.openModalBtn}
        aria-expanded="false"
        aria-controls="overlay"
      >
        Открыть модалку
      </button>
      {
        <div className={`${open ? s.show : s.overlay}`} id="overlay">
          <div className={`${s.modal}`}>
            <button onClick={() => setOpen(false)}>закрыть</button>
            <h2 className={s.modalTitle}>модальное окно</h2>
          </div>
        </div>
      }
    </div>
  );
};

export default Modal;
