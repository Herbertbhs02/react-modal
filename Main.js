import React from "react";

import "./styles.css";

const Main = props => {
  return (
    <div>
      <p>This is from the main page</p>
      <input
        type="button"
        value="open modal"
        onClick={props.open}
        className="close-modal"
      />
    </div>
  );
};

export default Main;
