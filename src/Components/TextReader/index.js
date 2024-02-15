import React, { useState, useEffect } from 'react';

const TextReader = ({ textFile }) => {

    const [file, setFile] = useState(null);

    const reader = new FileReader();
    reader.onload = async (textFile) => {
        const text = (textFile.target.result);
        console.log(text);
        setFile(text);
    };
    reader.readAsText(textFile.target.files[0]);

    return (
        <div>
            {file}
        </div>
    );

}

export default TextReader;