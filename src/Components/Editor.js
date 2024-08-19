import React, { useState } from 'react';

const Editor = ({ language, onChange }) => {
  return (
    <div className="editor">
      <textarea
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Write your ${language} code here...`}
      ></textarea>
    </div>
  );
};

export default Editor;
