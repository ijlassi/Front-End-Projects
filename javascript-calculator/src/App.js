import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { create, all } from 'mathjs'

const math = create(all)

  class App extends React.Component {
      constructor(props){
          super(props)
          this.state ={
              result: "0",
              currentValue:"",
              currentFormula:"",
              equalIsClicked:false
          }
          this.clear= this.clear.bind(this)
          this.numbers = this.numbers.bind(this);
          this.handleOperators = this.handleOperators.bind(this); 
          this.addDecimal = this.addDecimal.bind(this); 
          this.evaluate = this.evaluate.bind(this); 
      }
      clear() {
        this.setState({
          result : "0",
          currentValue:"",
          currentOperator: "",
          currentFormula:"",
          equalIsClicked:false
        })
      }
      numbers(event){
        if(this.state.currentValue[0] === '0' && event.target.value === "0"){
         this.setState({
           currentValue: this.state.currentValue
         })
        } else {
          if(this.equalIsClicked && typeof this.state.currentFormula === "number"){
            this.setState({
              result: event.target.value,
              currentFormula: event.target.value,
              currentValue: event.target.value,
              equalIsClicked: false
            })
          } else if (this.state.equalIsClicked && typeof this.state.currentFormula === "string"){
           this.setState({
            result: event.target.value,
            currentFormula: this.state.currentFormula + event.target.value,
            currentValue: event.target.value,
            equalIsClicked: false
           })
         } else {
           this.setState({
            result: this.state.currentValue + event.target.value,
            currentValue: this.state.currentValue + event.target.value,
            currentFormula: this.state.currentFormula + event.target.value,
            equalIsClicked: false
           })
         }
        }
      }
        handleOperators(event) {
          let lastChar = this.state.currentFormula[this.state.currentFormula.length-1];
          let myRegex = /[+\-*/]/;
    
        if (!myRegex.test(lastChar)) {
          this.setState({
              currentFormula: this.state.currentFormula + event.target.value,
              currentValue: ""
      })
        }else {
          if (lastChar !== "-" && event.target.value === "-") {
            this.setState({
              currentFormula: this.state.currentFormula + event.target.value,
            })
        } else if (event.target.value !== "-" && lastChar === "-") {
          this.setState({
              currentFormula: this.state.currentFormula.slice(0,-2) + event.target.value,
              currentValue: ""
            }) 
        } else {
          this.setState({
             currentFormula: this.state.currentFormula.slice(0,-1) + event.target.value
            })
        }
      }
   }
    addDecimal(event){
   let lastChar = this.state.currentFormula[this.state.currentFormula.length-1];
    let myRegex = /[+\-*/]/;
    
    if (!this.state.currentValue.includes(".") && this.state.equalIsClicked === false && !myRegex.test(lastChar)) {
      
      this.setState({
          output: this.state.result + ".",
          currentFormula: this.state.currentFormula + ".",
          currentValue: this.state.currentValue + "."})
    } 
  
  }
  
  evaluate(event) {
    if (this.state.currentFormula !== "") { 
      
      let output = math.evaluate(this.state.currentFormula);
      this.setState({
        result: output,
        currentFormula: output,
        equalIsClicked: true
      }) 
    }
  }
    render() {
        return(
          <div>
            <h1>JavaScript Calculator</h1>
          <main>
            <div className="calculator">
              
                  <div id="display">
                  <div id="currentFormula">{this.state.currentFormula} </div>
                  <div id="addDecimal">{this.state.addDecimal}</div>
                  </div>

                <div id= "button">
                <button id="clear" onClick={this.clear}>C</button><br />
               
                <button id="seven" onClick={this.numbers} value= "7">7</button>
                <button id="eight" onClick={this.numbers} value= "8">8</button>
                <button id="nine" onClick={this.numbers} value= "9">9</button>
                <button id="divide" onClick={this.handleOperators} value="/">/</button><br />

                <button id="four" onClick={this.numbers} value= "4">4</button>
                <button id="five" onClick={this.numbers} value= "5">5</button>
                <button id="six" onClick={this.numbers} value= "6">6</button>
                <button id="multiply" onClick={this.handleOperators} value= "*">✕</button><br />

                <button id="one" onClick={this.numbers} value= "1">1</button>
                <button id="two" onClick={this.numbers} value= "2">2</button>
                <button id="three" onClick={this.numbers} value= "3">3</button>
                <button id="subtract" onClick={this.handleOperators} value= "-">-</button><br /> 
          
                <button id="decimal" onClick={this.addDecimal}>.</button>
                <button id="zero" onClick={this.numbers} value ="0">0</button> 
                <button id="equal" onClick={this.evaluate} value="=">=</button>
                <button id="add" onClick={this.handleOperators} value= "+">+</button>
                </div>
               
               
                </div>
          </main>
          </div>
        )
    }
  }


ReactDOM.render(<App />, document.getElementById('root'))
export default App;
