import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export interface IModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const MODAL_STYLE = {
  position: 'fixed' as 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: '#fff',
  padding: '40px',
  zIndex: 1000,
};

const OVERLAY_STYLE = {
  position: 'fixed' as 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  zIndex: 1000,
};

const Modal = ({
  children,
  open,
  onClose,
}: IModalProps): JSX.Element | null => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLE}>
        <button onClick={onClose}>Close modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal') as Element
  );
};

export default Modal;
