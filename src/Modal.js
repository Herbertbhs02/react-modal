import React from "react";

import "../styles.css";

const Modal = props => {
  return (
    <div className={props.class}>
      <div className="modal-outer">
        <section className="modal-inner">
          <input
            type="button"
            value="close"
            onClick={props.close}
            className="close"
          />
          <form>
            <h2>Personal details</h2>
            <label>Name</label>
            <input placeholder="Name" className="form-input" />
            <label>Address</label>
            <input placeholder="Address" className="form-input" />
            <label>email</label>
            <input placeholder="email" className="form-input" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Modal;
