import { relative } from 'path';
import React, { useState } from 'react';
import Modal from './Modal';

const ReactPortalCase = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const BUTTON_WRAPPER_STYLE = {
    position: 'relative' as 'relative',
    zIndex: 1,
  };
  const OTHER_CONTENT_STYLE = {
    position: 'relative' as 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px',
  };

  const onClose = () => setIsOpen(false);

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLE} onClick={() => console.log('click')}>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <Modal open={isOpen} onClose={onClose}>
          Some data
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLE}>Other content</div>
    </>
  );
};

export default ReactPortalCase;
