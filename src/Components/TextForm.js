import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const cleartext = () => {
    let newText = ' ';
    setText(newText);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'dark' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control"
            value={text} onChange={handleOnChange} style={{ fontWeight: isBold ? 'bold' : 'normal', backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'dark' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-danger mx-1" onClick={cleartext}>Clear Text</button>
        <button className="btn btn-warning mx-1" onClick={handleBoldClick}>{isBold ? 'Make Normal' : 'Make Bold'}</button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'dark' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} Words and {text.length} characters</p>
        <p>This text is read in {0.008 * text.split(' ').length} minutes.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}


// import React, { useState } from 'react';

// export default function TextForm(props) {
//   const [text, setText] = useState('');
//   const [textTransform, setTextTransform] = useState('normal');

//   const handleTransformClick = (transformType) => {
//     let newText = '';

//     switch (transformType) {
//       case 'uppercase':
//         newText = text.toUpperCase();
//         setTextTransform('uppercase');
//         break;
//       case 'lowercase':
//         newText = text.toLowerCase();
//         setTextTransform('lowercase');
//         break;
//       case 'normal':
//         newText = text;
//         setTextTransform('normal');
//         break;
//       default:
//         newText = text;
//         setTextTransform('normal');
//         break;
//     }

//     setText(newText);
//   };

//   const cleartext = () => {
//     let newText = ' ';
//     setText(newText);
//     setTextTransform('normal');
//   };

//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             value={text}
//             onChange={handleOnChange}
//             style={{ textTransform: textTransform }}
//             rows="8"
//           ></textarea>
//         </div>
//         <button className="btn btn-primary mx-1" onClick={() => handleTransformClick('uppercase')}>
//           Convert To UpperCase
//         </button>
//         <button className="btn btn-primary mx-1" onClick={() => handleTransformClick('lowercase')}>
//           Convert To LowerCase
//         </button>
//         <button className="btn btn-danger mx-1" onClick={cleartext}>
//           Clear Text
//         </button>
//         <button className="btn btn-warning mx-1" onClick={() => handleTransformClick('normal')}>
//           Make Normal
//         </button>
//       </div>
//       <div className="container my-2">
//         <h2>Your Text Summary</h2>
//         <p>{text.split(' ').length} Words and {text.length} characters</p>
//         <p>This text is read in {0.008 * text.split(' ').length} minutes.</p>
//         <h2>Preview</h2>
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }
