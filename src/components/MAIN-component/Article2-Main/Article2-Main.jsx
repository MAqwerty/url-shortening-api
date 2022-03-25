import React from "react";
import "./Style-Article2-Main.css"
import customizableSVG from "./../../../assets/svg/icon-fully-customizable.svg"
import recordsSVG from "./../../../assets/svg/icon-detailed-records.svg"
import recognitionSVG from "./../../../assets/svg/icon-brand-recognition.svg"

const Article2Main = () => {
  return (
    <>
      <article className="container-Article2-Main">

        <header className="header-Article2-Main">
          <h1 className="h1-Article2-Main">  Advanced Statistics</h1>
          <p className="p-Article2-Main">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </header>

        <main className="container-parts-Article2-Main">
          <div className="parts-Article2-Main part1">
            <div className="IMG-Article2-Main">
              <img src={recognitionSVG} alt="" />
            </div>
            <h2 className="h2-Article2-Main">Brand Recognition</h2>
            <p>Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.</p>
          </div>

          <div className="parts-Article2-Main part2">
            <div className="IMG-Article2-Main">
              <img src={recordsSVG} alt="" />
            </div>
            <h2 className="h2-Article2-Main">Detailed Records</h2>
            <p>Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.</p>
          </div>
          
          <div className="parts-Article2-Main part3">
            <div className="IMG-Article2-Main">
              <img src={customizableSVG} alt="" />
            </div>
            <h2 className="h2-Article2-Main">Fully Customizable</h2>
            <p>Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.</p>
          </div>

          <div className="blue-line"></div>
        </main>
      </article>  
    </> 
  )
};

export default Article2Main;
