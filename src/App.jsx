import { useState } from 'react'
import { marked } from 'marked';
import './App.css'

function App() {
  const [input, setInput] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName":"John",
    "lastName":"Smith",
    "age":25,
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote
  ![alt text](image.jpg)

  **bold text**
`);

  marked.setOptions({
    breaks: true
  });

  return (
    <>
      <div>
        <textarea id="editor" value={input} onChange={(e)=>setInput(e.target.value)}></textarea>
        <div id="preview" dangerouslySetInnerHTML={{
          __html:marked(input)
        }}></div>
      </div>
    </>
  )
}

export default App
