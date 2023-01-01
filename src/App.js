import './App.css';
import {useState} from 'react';
import { marked } from 'marked';

function App() {
  let [text,setText]=useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**

  `)

  marked.setOptions({
    breaks:true
  })
  return (
    <div className="App">
      <h1>input:</h1>
      <textarea id='editor' rows={"10"} value={text} onChange={(e)=>setText(e.target.value)}></textarea>
      <h1>output:</h1>
      <div id='preview' dangerouslySetInnerHTML={{
        __html:marked(text)
      }}></div>

    </div>
  );
}

export default App;
