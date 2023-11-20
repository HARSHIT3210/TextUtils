import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3"><textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} Words and {text.length} characters</p>
        <p>This text is read in {0.008 * text.split(' ').length} minutes.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
