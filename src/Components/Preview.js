import React from 'react';

const Preview = ({ code }) => {
    return (
        <div className="preview">
            <iframe
                title="code-preview"
                srcDoc={code}
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />

        </div>
    );
};

export default Preview;

