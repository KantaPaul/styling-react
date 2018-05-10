import React from 'react';
import Modal from 'react-modal';

let OptionsModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectOption}
      onRequestClose={props.clearSelectOption}
      contentLabel="Selected Text"
      closeTimeoutMS={200}
      className="modal"
      ariaHideApp={false}
    >
      <div>
        <h3>Selected Text</h3>
        {props.selectOption && <p>{props.selectOption}</p>}
        <button onClick={props.clearSelectOption} className="btn btn-info">Cancel</button>
      </div>
    </Modal>
  );
}

export default OptionsModal;