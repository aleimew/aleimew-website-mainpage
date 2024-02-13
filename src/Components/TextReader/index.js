import React, { Component } from 'react';

const TextReader = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
        const text = (e.target.result);
        console.log(text);
        alert(text);
    };
    reader.readAsText(e.target.files[0]);


    return (
        <div>
            <p>{text}</p>
        </div>
    );
}

export default TextReader;