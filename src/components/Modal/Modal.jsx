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
        Открыть модальное окно
      </button>

      <div className={`${s.overlay} ${open ? s.show : s.overlay}`} id="overlay">
        <div className={`${s.modal}`}>
          <button onClick={() => setOpen(false)} className={s.closeBtn}>закрыть</button>
          <h2 className={s.modalTitle}>модальное окно</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
