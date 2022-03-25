import React from "react";
import "./Style-Article1-Main.css"

const AppendLink = (props) => {
  return (
    <>
      <div className="div-links">
        <p>{props.link}</p>     
        <div className="div-inner-links">
          <p className="short-link">{props.shortlink}</p>
          <button className="btn-copy-link">Copy</button>  
        </div>  
      </div>  
    </>
  )
};

export default AppendLink;
