// import React from "react";
// class InputNumber extends React.Component {
//   constructor() {
//     super();
//     this.handleUserInput = this.handleUserInput.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//   }
//   handleUserInput(e) {
//     e.preventDefault();
//     let userNumber = btoa(this.userNumber.value);
//     this.userNumber.value = "";
//     this.props.compareUserInput(userNumber);
//   }
//   handleReset() {
//     this.props.onReset();
//   }
//   render() {
//     let layout;
//     if(this.props.wrong < 3) {
//       layout = <div className="app__input">
//             <form onSubmit={this.handleUserInput}>
//               Number is: 
//               <input 
//                 pattern="[0-9]+"
//                 type="text"
//                 ref={ (ref) => this.userNumber = ref } 
//                 required
//                 autoFocus />
//               <br/>
//               <br/>
//             </form>
//             <button onClick={this.handleReset}>Restart</button>
//           </div>
//     } else {
//       layout = <div className="app__end">
//             <div class="app__notify">Better luck next time (✧ω✧)</div><br/><br/><button onClick={this.handleReset}>Restart</button>
//           </div>;
//     }
    
//     return(layout)
//   }
// }
// export default InputNumber;

import React, { useState } from "react";

const InputNumber = (props) => {
  const [userNumber, setUserNumber] = useState("");

  const handleUserInput = (e) => {
    e.preventDefault();
    const encodedNumber = btoa(userNumber);
    setUserNumber("");
    props.compareUserInput(encodedNumber);
  };

  const handleReset = () => {
    props.onReset();
  };

  let layout;
  if (props.wrong < 3) {
    layout = (
      <div className="app__input">
        <form onSubmit={handleUserInput}>
          Number is:
          <input
            pattern="[0-9]+"
            type="text"
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.value)}
            required
            autoFocus
          />
          <br />
          <br />
        </form>
        <button onClick={handleReset}>Restart</button>
      </div>
    );
  } else {
    layout = (
      <div className="app__end">
        <div class="app__notify">Better luck next time (✧ω✧)</div>
        <br />
        <br />
        <button onClick={handleReset}>Restart</button>
      </div>
    );
  }

  return layout;
};

export default InputNumber;
