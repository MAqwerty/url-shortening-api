import React from "react";
import "./Styles-pages/Home.css"
import Article1Main from "./MAIN-component/Article1-Main/Article1-Main";
import Article2Main from "./MAIN-component/Article2-Main/Article2-Main";
import Footer from "./Footer-component/Footer"
const Home = () => {

  return (
    <>
      <header>
        <div className="header-TEXT">
            <h1 className="header-h1">  More than just shorter links</h1>
            <p className="header-p">Build your brand’s recognition and get detailed insights 
               on how your links are performing.</p>
             <button className="header-button">Get Started</button>
        </div>
        <div className="header-SVG"></div>
      </header>

      <main>
        <Article1Main />
        <Article2Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
};

export default Home;
