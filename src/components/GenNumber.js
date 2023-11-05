// import React from "react";
// class GenNumber extends React.Component {
//   componentDidUpdate() {
//     let time, digit;
//     // increase showing time depend on level
//     digit = this.props.level.main + 2;
//     time = 100 * Math.min(digit, 5) + 400 * Math.max(digit-5, 0);

//     let number = document.getElementById('number');
//     setTimeout(function() {
//         number.innerHTML = number.innerHTML.replace(/\w/gi, '&#183;');
//       }, time);

//   }
//   componentDidMount() {
//     let number = document.getElementById('number');
//     setTimeout(function() {
//       number.innerHTML = number.innerHTML.replace(/\w|\W/gi, '&#183;');
//     }, 1200);
//   }
//   render() {
//     return(
//       <div className="app__gen-number">
//         <div className="app__info">
//           <p className="app__level">Level: {this.props.level.main} - {this.props.level.sub}</p>
//           <p className="app__wrong">Wrong: {this.props.wrong}/3</p>
//         </div>
//         <p >~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
//         <p >~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
// <br/>
//         <p className="app__number" id="number">{(this.props.wrong < 3) ? atob(this.props.question) : '????'}</p>
//         <br/>
//         <p >~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
//         <p >~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>

//       </div>
//     )
//     }
//   }
//   export default GenNumber;
import React, { useEffect } from "react";

const GenNumber = (props) => {
  useEffect(() => {
    let time, digit;
    // Increase showing time depending on the level
    digit = props.level.main + 2;
    time = 100 * Math.min(digit, 5) + 400 * Math.max(digit - 5, 0);

    let number = document.getElementById('number');
    setTimeout(function () {
      number.innerHTML = number.innerHTML.replace(/\w/gi, '&#183;');
    }, time);
  }, [props.level]);

  useEffect(() => {
    let number = document.getElementById('number');
    setTimeout(function () {
      number.innerHTML = number.innerHTML.replace(/\w|\W/gi, '&#183;');
    }, 1200);
  }, []);

  return (
    <div className="app__gen-number">
      <div className="app__info">
        <p className="app__level">Level: {props.level.main} - {props.level.sub}</p>
        <p className="app__wrong">Wrong: {props.wrong}/3</p>
      </div>
      <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
      <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
      <br />
      <p className="app__number" id="number">{(props.wrong < 3) ? atob(props.question) : '????'}</p>
      <br />
      <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
      <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
    </div>
  );
};

export default GenNumber;
