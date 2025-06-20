import React from 'react';
import './model.css';

const Model = ({ children, onclose }) => {
  return (
    <div className="dialog-backdrop" onClick={onclose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Model;
