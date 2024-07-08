import React,{ useState } from 'react'
 
export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UPEER CASE click here");
        let new_text = text.toUpperCase();
        setText(new_text);  
        props.showAlert("Convert to upper case!","success")
    } 

    const handleExtarSpaceClick =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove extra space!","success")
    }
    
    const handleloClick = ()=>{
        // console.log("UPEER CASE click here");
        let new_text = text.toLowerCase();
        setText(new_text);
        props.showAlert("Convert to lower case!","success")

    }

    const handleclearClick = ()=>{
        // console.log("UPEER CASE click here");
        let new_text = "";
        setText(new_text);
        props.showAlert("CLEAR TEXT!","success")

    }

    const handlecopyClick = ()=>{
        var text = document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard!","success")

    }

    const handleOnChange=(event)=>{
        // console.log("textarea");
        setText(event.target.value) ;
    }

    const [text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textbox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'grey',color:props.mode === 'dark'?'white':'#042743'}}></textarea>
            </div>
            <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <button className="btn btn-primary w-100 mb-2" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <button className="btn btn-primary w-100 mb-2" onClick={handleloClick}>Convert to LowerCase</button>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <button className="btn btn-primary w-100 mb-2" onClick={handleExtarSpaceClick}>Remove Extra Space</button>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <button className="btn btn-primary w-100 mb-2" onClick={handlecopyClick}>Copy Text</button>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <button className="btn btn-primary w-100 mb-2" onClick={handleclearClick}>Clear Text</button>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2"></div>
    </div>

    </div>
    <div className="container my-3 " style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length -1} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter someting in the toolbox to preview it here'}</p>
    </div>
    </>
  )
}
