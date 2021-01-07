import './App.css';
import React from 'react'

class App extends React.Component {
  pickNumbers () {
    const numbers = [
      {id: "zero", number: 0},{id: "one", number: 1},{id: "two", number: 2},
      {id: "thre", number: 3},{id: "four", number: 4},{id: "five", number: 5},
      {id: "six", number: 6},{id: "seven", number: 7},{id: "eight", number: 8},
      {id: "nine", number: 9},{id: "add", number: 43},{id: "substract", number: 45},
      {id: "multiply", number: 42},{id: "divide", number: 47}
    ]
    let i = numbers.number;
    if ((i.ke))
    
  }
  handleClick() {
    const currentNumber = this.state.numbers.number;


  }


  render() {
    return (
    <div className="App">
      <h1> JavaScript Calculator </h1>
      <div className="container">
         <div className="container" id="equals" > = </div>
         <div className="container" id="zero"> 0 </div>
         <div className="container" id="one"> 1 </div>
         <div className="container" id="two"> 2 </div>
         <div className="container" id="three"> 3 </div>
         <div className="container" id="four"> 4 </div>
         <div className="container" id="five"> 5 </div>
         <div className="container" id="six"> 6 </div>
         <div className="container" id="seven"> 7 </div>
         <div className="container" id="eight"> 8 </div>
         <div className="container" id="nine"> 9 </div>

         </div>       
    </div>
  );
  }

}

export default App;
