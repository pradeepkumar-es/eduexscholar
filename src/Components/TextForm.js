import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("upper case was clicked"+text)
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick=()=>{
        let newText2=text.toLowerCase();
        setText(newText2);
    }

    const onChangeHandler=(event)=>{
        // console.log("on change")
        setText(event.target.value);
    }
    //declaring a new state varaible of name text
    const [text, setText]=useState("type here"); //in setText or setCount or setNameofvaraiblecapital of 2nd part is recommended
    // let text="new text"; //wrogn way to update text written in useState
    // setText("new Text"); //correct way to update text written in useState
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control"  value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercases </button>
            <button className='btn btn-primary' onClick={handleLoClick}>convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split("").length} Word and {text.length} Character</p>
            <p>{0.008*text.split("").length}minute to read</p>
            <h2>Text Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}
