// import React from "react";
// import InputNumber from "./components/InputNumber";
// import GenNumber from "./components/GenNumber";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.compareUserInput = this.compareUserInput.bind(this);
//     this.randomGenerate = this.randomGenerate.bind(this);
//     this.resetState = this.resetState.bind(this);
//     this.state = {
//       question: btoa(this.randomGenerate(2)),
//       level: {main: 1, sub: 1},
//       wrong: 0    
//     }
//   }
//   resetState() {
//     this.setState({
//       question: btoa(this.randomGenerate(2)),
//       level: {main: 1, sub: 1},
//       wrong: 0,
//     })
//   }
//   randomGenerate(digit) {
//     let max = Math.pow(10, digit) - 1,
//       min = Math.pow(10, digit - 1)

//     return Math.floor(Math.random() * (max - min + 1)) + min
//   }
//   compareUserInput(userNumber) {
//     let currQuestion = this.state.question,
//       mainLevel = this.state.level.main,
//       subLevel = this.state.level.sub,
//       wrong = this.state.wrong,
//       digit;

//     if(userNumber === currQuestion) {
//       if(subLevel < 3) {
//         ++subLevel;
//       } else 
//       if(subLevel === 3) {
//         ++mainLevel;
//         subLevel = 1;
//       }
//     } else {
//       ++wrong;
//     }
//     digit = mainLevel + 2;

//     this.setState({
//       question: btoa(this.randomGenerate(digit)),
//       level: {main: mainLevel, sub: subLevel},
//       wrong: wrong
//     });
//   }
//   render() {
//     return(
//       <div className="main__app">
//         <GenNumber 
//           question={this.state.question}
//           level={this.state.level}
//           wrong={this.state.wrong}/>
//         <InputNumber 
//           compareUserInput={this.compareUserInput} 
//           wrong = {this.state.wrong} 
//           onReset = {this.resetState} />
//       </div>
//     )
//   }
// }
// export default App;

import React, { useState } from "react";
import InputNumber from "./components/InputNumber";
import GenNumber from "./components/GenNumber";

const randomGenerate = (digit) => {
  let max = Math.pow(10, digit) - 1,
    min = Math.pow(10, digit - 1);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const App = () => {
  const [state, setState] = useState({
    question: btoa(randomGenerate(2)),
    level: { main: 1, sub: 1 },
    wrong: 0,
  });

  const resetState = () => {
    setState({
      question: btoa(randomGenerate(2)),
      level: { main: 1, sub: 1 },
      wrong: 0,
    });
  };

  const compareUserInput = (userNumber) => {
    const currQuestion = state.question;
    let { main: mainLevel, sub: subLevel } = state.level;
    let { wrong } = state;
    let digit;

    if (userNumber === currQuestion) {
      if (subLevel < 3) {
        subLevel++;
      } else if (subLevel === 3) {
        mainLevel++;
        subLevel = 1;
      }
    } else {
      wrong++;
    }

    digit = mainLevel + 2;

    setState({
      question: btoa(randomGenerate(digit)),
      level: { main: mainLevel, sub: subLevel },
      wrong: wrong,
    });
  };

  return (
    <div className="main__app">
      <GenNumber
        question={state.question}
        level={state.level}
        wrong={state.wrong}
      />
      <InputNumber compareUserInput={compareUserInput} wrong={state.wrong} onReset={resetState} />
    </div>
  );
};

export default App;
