
import React, { useState } from 'react';
import Editor from './Components/Editor';
import Preview from './Components/Preview';
import './App.css';

const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const generateCode = () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>
          try {
            ${js}
          } catch (error) {
            console.error(error);
            document.body.innerHTML += '<p style="color: red;">' + error.message + '</p>';
          }
        </script>
      </body>
      </html>
    `;
  };
  

  return (
    <div className="App">
      <div className="editor-container">
        <h2>HTML</h2>
        <Editor language="HTML" onChange={setHtml} />
      </div>
      <div className="editor-container">
        <h2>CSS</h2>
        <Editor language="CSS" onChange={setCss} />
      </div>
      <div className="editor-container">
        <h2>JavaScript</h2>
        <Editor language="JavaScript" onChange={setJs} />
      </div>
      <div className="preview-container">
        <Preview code={generateCode()} />
      </div>
    </div>
  );
};

export default App;

