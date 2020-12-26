import React from 'react'
import './App.css';
import ReactDOM from 'react-dom';

const Quote = (props) => {
  return (
    <div>
      <div id="text"><p><i className="fa fa-quote-left"></i> {props.quote.quote} <i className="fa fa-quote-right"></i></p>
      </div>
      <div id="author"><p>- {props.quote.author}</p>
      </div>
    </div>
  )
}

Quote.defaultProps = {
  quote: {quote: "default quote", author: "default author"}
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.pickQuote(),
      color: this.pickColor(),
    }
    this.pickQuote = this.pickQuote.bind(this)
    this.pickColor = this.pickColor.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  
  pickQuote() {
    const quotes = [
  { quote: 'When you have something to say, silence is a lie.',
   author: 'Dr. Jordan B. Peterson'},
  { quote: 'Privilege is invisible to those who have it.',
   author: 'Dr. Michael Kimmel'},
  { quote: 'A journey of a thousand miles begins with a single step.',
   author: 'Laozi'},
  { quote: 'The most reliable way to predict the future is to create it.',
   author: 'Abraham Lincoln'},
  { quote: 'To stand in silence when they should be protesting makes cowards of men.',
   author: 'Abraham Lincoln'},
  { quote: 'We cannot solve our problems with the same thinking we used when we created them.',
   author: 'Albert Einstein'},
  { quote: 'The world will not be destroyed by those who do evil, but by those who watch them without doing anything.',
   author: 'Albert Einstein'},
  { quote: 'Don\'t listen to the person who has the answers, listen to the person who has the questions.',
   author: 'Albert Einstein'},
  { quote: 'Women always worry about things that men forget; men always worry about things women remember.',
   author: 'Albert Einstein'},
  { quote: 'If you can\'t explain it simply, you don\'t understand it well enough.',
   author: 'Albert Einstein'},
  { quote: "Excellence is never an accident.",
   author: "Aristotle"},
  { quote: "Be a free thinker and don't accept everything you hear as truth. Be critical and evaluate what you believe in.",
   author: "Aristotle"},
  { quote: "Criticism is something we can avoid easily by saying nothing, doing nothing, and being nothing.",
   author: "Aristotle"},
  { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
   author: "Aristotle"},
  { quote: "The worst form of inequality is to try to make unequal things equal",
   author: "Aristotle"},
  { quote: "You can ignore reality, but you cannot evade the consequences of ignoring reality",
   author: "Ayn Rand"},
  { quote: "If a businessman makes a mistake, he suffers the consequences. If a bureaucrat makes a mistake, you suffer the consequences.",
   author: "Ayn Rand"},
  { quote: "Yesterday's home runs don't win today's games.",
   author: "Babe Ruth"},
  { quote: "If everyone is thinking alike, then no one is thinking.",
   author: "Benjamin Franklin"},
  { quote: "Vision without execution is daydreaming.",
   author: "Bill Gates"},
  { quote: "The world won't care about your self-esteem. The world will expect you to accomplish something before you feel good about yourself.",
   author: "Bill Gates"},
  { quote: "It's not what happens that counts...it's how you react.",
   author: "Bruce Lee"},
  { quote: "You can't go back and change the beginning, but you can start where you are and change the ending.",
   author: "C.S. Lewis"},
  { quote: "When the whole world is running towards a cliff, he who is running in the opposite direction appears to have lost his mind.",
   author: "C.S. Lewis"},
  { quote: "A man is great not because he hasn't failed; a man is great because failure hasn't stopped him.",
   author: "Confucius"},
  { quote: "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
   author: "Confucius"},
  { quote: "Attack the evil that is within yourself, rather than attacking the evil that is in others.",
   author: "Confucius"},
  { quote: "It's not what we profess but what we practice that gives us integrity.",
   author: "Francis Bacon"},
  { quote: "People prefer to believe what they want to be true.",
   author: "Francis Bacon"},
  { quote: "The best way to keep a prisoner from escaping is to make sure he never knows he's in prison.",
   author: "Fyodor Dostoevsky"},
  { quote: "The further a society drifts from truth the more it will hate those who speak it.",
   author: "George Orwell"},
  { quote: "The most effective way to destroy people is to deny and obliterate their own understanding of their history.",
   author: "George Orwell"},
  { quote: "There is no swifter route to the corruption of thought than through the corruption of language.",
   author: "George Orwell"},
  { quote: "It's very hard to be great at what you do if you aren't deeply passionate.",
   author: "Ivanka Trump"},
  { quote: "Act as if you are, and you will become such.",
   author: "Leo Tolstoy"},
  { quote: "Everyone thinks of changing the world, but no one thinks of changing himself.",
   author: "Leo Tolstoy"},
  { quote: "Wrong does not cease to be wrong because the majority share in it.",
   author: "Leo Tolstoy"},
  { quote: "Nothing strengthens authority so much as silence.",
   author: "Leonardo da Vinci"},
  { quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.",
   author: "Martin Luther King Jr."},
  { quote: "Perhaps the worst sin in life is knowing right and not doing it.",
   author: "Martin Luther King Jr."},
  { quote: "Some people want it to happen, some wish it would happen, other make it happen.",
   author: "Michael Jordan"},
  { quote: "What you are thinking is what you are becoming.",
   author: "Muhammad Ali"},
  { quote: "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
   author: "Oprah Winfrey"},
  { quote: "The right question is usually more important than the right answer.",
   author: "Plato"},
  { quote: "When the debate is lost, slander becomes the tool of the loser.",
   author: "Socrates"},
  { quote: "When you want to help people, you tell them the truth. When you want to help yourself, you tell them what they want to hear.",
   author: "Thomas Sowell"},
  { quote: "If you want to know who controls you, look at who you are not allowed to criticize.",
   author: "Voltaire"},
  { quote: "Those who can make you believe absurdities can make you commit atrocities.",
   author: "Voltaire"},
  { quote: "The more often a stupidity is repeated, the more it gets the appearance of wisdom.",
   author: "Voltaire"},
  { quote: "It is difficult to free fools from the chains they revere.",
   author: "Voltaire"},
  { quote: "The most important decision you make is to be in a good mood.",
   author: "Voltaire"},
  { quote: "We are all guilty of the good we did not do.",
   author: "Voltaire"}, 
]
    let i = Math.floor(Math.random()*quotes.length);
    return quotes[i];
  }
  
  pickColor() {
    const colors = ['blue', 'black', 'purple', 'indianRed', 'crimson', 'maroon','DarkOliveGreen','fireBrick', 'DarkMagenta', 'DarkGreen','MidnightBlue'];
    let i = Math.floor(Math.random()*colors.length);
    return colors[i];
  }
  
  handleClick() {
    const currentQuote = this.state.quote.quote;
    const currentColor = this.state.color;
    let newQuote;
    let newColor;
    
    do {
      newQuote = this.pickQuote();
    } while (newQuote.quote === currentQuote) 
      
    do {
      newColor = this.pickColor();
    } while (newColor === currentColor) 
    
    this.setState({
      quote: newQuote,
      color: newColor,
    })
       
  }
  
  render () {    
    const bgStyle = { backgroundColor: this.state.color};
    const txtStyle = { color: this.state.color};
    return (
      <div className="container-fluid" id="quotebox" style={bgStyle}>
        <div id="wrapper">
          <div className="container" id="quote-box" style={txtStyle}>
            <Quote quote={this.state.quote}/>
            <a className="btn" id="tweet-quote" style={bgStyle} target="_blank" rel="noreferrer" href={'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent("\"" + this.state.quote.quote + this.state.quote.author)}><i className="fab fa-twitter"></i></a>  
            <a className= "btn" id= "tumblr-quote" style = {bgStyle} target="_blank" rel="noreferrer" href={'https://tumblr.com/intent/tumblrt?hashtags=quotes&text=' + encodeURIComponent("\"" + this.state.quote.quote + "\"" + this.state.quote.author)}><i className="fab fa-tumblr"></i></a> 
            <div id="nq-wrapper">
              <button className="btn" id="new-quote" onClick={this.handleClick} style={bgStyle}>New quote</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<QuoteBox />, document.getElementById("quotebox"))
export default QuoteBox;
