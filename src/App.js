import React from "react";
import "./styles.css";
import Modal from "./modals/Modal";
import Main from "./Main";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  show = () => {
    this.setState({ show: true });
  };
  hide = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        
          <Main open={this.show} />
          <Modal
            class={this.state.show ? "active" : "hide"}
            close={this.hide}
          />
        </div>
    
    );
  }
}

export default App;

//<div className={this.state.show ? "active": "hide"}>
//<input type='button' value='close' onClick={this.hide}/>
