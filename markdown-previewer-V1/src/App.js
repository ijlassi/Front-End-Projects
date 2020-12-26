import React from "react"
import './App.css';
import ReactDOM from 'react-dom'
import marked from 'marked'

const intialMarkdown = ` 
### Headers
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List 

- List number one
- list number two
- list number three 
- list number four

### Links


[Facebook](https://www.facebook.com/)


[Instagram](https://www.instagram.com/?hl=en)


[twiter](https://twitter.com/)

### Text DEcorations 

*italic* 

**bold** 

*** bold and italic*** 

### Images 

![alt text](https://i.pinimg.com/originals/00/c9/2e/00c92e5be0a40e86b955f71be64b69fb.jpg "so nice view")

### Blackquote 
> to be, or not to be.

### Code 
\`npm install creat-react-app -g\`


\`\`\`
function addTwoNumbers(a,b)

{

  return a+b
}
\`\`\`
const name = 'iness'

const age = 27

`
var renderer = new marked.Renderer()

renderer.link = function(href, title, text){
  return`<a href=${href} target ="_blank">${text}</a>`
}

marked.setOptions({
  renderer,
  breaks : true
})

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

  render(){
  return (
    <div className="App">
    <h1>A Markdown Previewer </h1>
     <div className="container">
     <div className="left" >
     <textarea id="editor" value={this.state.markdown} onChange ={this.handleChange.bind(this)}/>
     </div>
     <div className="right">
     <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}/>
     </div>
     </div>
    </div>
  );
}
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App;
