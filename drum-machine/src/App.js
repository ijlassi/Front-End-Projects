import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';

const data = [
	{
		id:'Heater-1',
		letter:'A',
		src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
	},
	{
		id:'Heater-2',
	  letter:'Z',
		src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
	},
	{
		id:'Heater-3',
		letter:'E',
		src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
	},
	{
		id:'Heater-4',
		letter:'R',
		src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
	},
	{
		id:'Clap',
		letter:'B',
		src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
	},
	{
		id:'Open-HH',
		letter:'U',
		src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
	},
	{
		id:'Kick-n-Hat',
		letter:'I',
		src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
	},
	{
		id:'Kick',
		letter:'O',
		src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
	},
	{
		id:'Closed-HH',
		letter:'P',
		src:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
	}
]

class DrumPad extends React.Component {

componentDidMount(){
document.addEventListener('keydown', this.handleKeyDown)
window.focus()
}

componentWillUnmount(){
document.removeEventListener('keydown', this.handleKeyDown)
}

handleKeyDown = e => {
if(e.keyCode === this.props.letter.charCodeAt()){
this.audio.play()
this.audio.currentTime = 0
this.props.handleDisplay(this.props.id)
}
}

handleClick =() => {
this.audio.play()
this.audio.currentTime = 0
this.props.handleDisplay(this.props.id)
}

render() {
	return (
		<div 
			className= 'drum-pad'
			id ={this.props.id}
			onClick= {this.handleClick}>
		<h1>{this.props.letter}</h1>
		<audio 
			className='clip'
			id= {this.props.letter} 
			src= {this.props.src}
			ref= {ref => this.audio= ref}>

		</audio>
	</div>
		)
	}
}

class App extends React.Component {
  constructor(props){
	super(props);
	this.state = {
		display :'Press a Key On The Keyboard'
	  }
  }
	handleDisplay = display => this.setState ({display})
	
  render() {
  	return (
    	<div className="container" id = "drum-machine">
      		<div classNAme ="container" id="display">{this.state.display}</div>
				<div id="drum-pads">
				{data.map(i => (
					<DrumPad
					  id= {i.id}
					  letter= {i.letter}
					  src= {i.src}
					  handleDisplay= {this.handleDisplay}
					  />))}
        </div>
    </div>
  );
}
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App;
