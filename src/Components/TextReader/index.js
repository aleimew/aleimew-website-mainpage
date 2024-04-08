import React, { useState } from 'react';
import { Passage } from '../PageElements';

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

    //TODO: add different states depending on what gets passed in the file.

    fetch(textFile)
        .then(r => r.text())
        .then(text => {
            console.log('text decoded:', text);
            setFile(text);
        });

    return (
        <Passage>
            <nowrap>{file}</nowrap>
        </Passage>
    );

}

export default TextReader;