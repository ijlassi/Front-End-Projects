import React from "react"
import './App.css';
import ReactDOM from 'react-dom'

const intialMarkdown = ` 
### Headers
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
### List 
1 List biscuits
2 List vegetables
3 List fruits 
4 List drinks
### Links
[Facebook](facebook.com)
[Instagram](instagram.com)
[Twitter](twitter.com/)
### Text Decorations 
  *italic* 
  **bold**
 *** bold and italic***
### Images 
![image](https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg "so nice view")
### Blockquote 
  The future belongs to those who believe in the beauty of their dreams.
### Code 
\`\`\`
 function addTwoNumbers(a,b) {
    return a+b
 }
 const name ="iness"
 const age= "27"
\`\`\`
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      markdown :intialMarkdown
    }
  }
  handleChange(event){
    this.setState({ markdown: event.target.value})
  }

  parseMarkdown(text) {
    const htmlText = text
      .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      .replace(/^### (.*$)/gim, '<span><h3>$1</h3></span>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^>(.+)/gm, '<blockquote> $1 </blockquote>')
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
      .replace(/\*(.*)\*/gim, '<p><i>$1</i></p>')
      .replace(/^[0-9] (.*$)/gim, '<p><ul><li> $1 </li></ul></p>')
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
      .replace(/\[(.*?)\]\((.*?)\)/gim, "<span><a href='$2'>$1</a></span>")
      .replace(/[`]{3}([^`]+)[`]{3}/gim, '<pre><code> $1 </code></pre>')
      .replace(/\n$/gim, '<br />')
    return htmlText.trim()
  }

  render(){
  return (
    <div className="App">
    <h1 id="title">A Markdown Previewer </h1>
     <div className="container">
     <div className="left" >
     <textarea id="editor" value={this.state.markdown} onChange ={this.handleChange.bind(this)}/>
     </div>
     <div className="right">
     <div id="preview" dangerouslySetInnerHTML={{__html:this.parseMarkdown(this.state.markdown)}}/>
     </div>
     </div>
    </div>
  );
}
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App;
