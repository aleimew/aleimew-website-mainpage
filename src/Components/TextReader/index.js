import React, { useState } from 'react';

const TextReader = ({ textFile }) => {

    const [file, setFile] = useState(null);

    // NOTE: this coe is more for reading a file uploaded by the user
    // via an <input> element, not for reading a file already on the server
    //
    // const reader = new FileReader();
    // reader.onload = async (textFile) => {
    //     const text = (textFile.target.result);
    //     console.log(text);
    //     setFile(text);
    // };
    // reader.readAsText(textFile.target.files[0]);

    // here, textFile is the raw data imported from the caller. all this code
    // does is read and decode the file, then call setFile to set the state for the
    // component to display

    fetch(textFile)
        .then(r => r.text())
        .then(text => {
            console.log('text decoded:', text);
            setFile(text);
        });

    return (
        <div>
            {file}
        </div>
    );

}

export default TextReader;