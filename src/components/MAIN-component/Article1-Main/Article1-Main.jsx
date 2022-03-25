import React from 'react';
import ReactDOM from 'react-dom';
import "./Style-Article1-Main.css"
import Loader from "./../../../assets/svg/Loader.svg"
import { useState , useEffect } from "react";
import AppendLink from './Append-Link';

const Article1Main = () => {
  const axios = require('axios').default;

  const [value,Setvalue]=useState("")
  const [REGEXtest,SetREGEXtest]=useState(false)
  const [Counter,SetCounter]=useState(0)

  const [loading,setloading]= useState(false);

    let DefaultData = [
    {
      link : "https://www.youtube.com",
      shortlink: "https://9qr.de/S1qVgw"
    },{
      link: "https://github.com/",
      shortlink : "https://9qr.de/2QI5lZ"
    },
  ]
  
  const GETdata = async () => {

    setloading(true)

    if((value !== "") && REGEXtest){

      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${value}`);

      if(response.data.ok){
        let GETlink = response.data.result.original_link;
        let GETshortlink = response.data.result.short_link2;
        
        SetCounter(Counter+1)

        let shorterlinksArticle1 = document.getElementById('shorterlinksArticle1')
        let divBOX = document.createElement('div')
        divBOX.style.width="100%"
        let newCounter = Counter ;
        divBOX.classList.add(`NewLink${newCounter++}`)
        shorterlinksArticle1.appendChild(divBOX)
        
        ReactDOM.render(<AppendLink link={GETlink} shortlink={GETshortlink} />,document.querySelector(`.NewLink${Counter}`)) 
      }
    }
    setloading(false)
  }
  
  useEffect(() => {
  
    // .............................TEST REGEX FOR INPUT................................//

    function validateURL (URLadress){

      let regexURL = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/;
    
      if (URLadress.match(regexURL)) {
        document.getElementById("Message").style.display = "none";
        document.getElementById("input-Article1-Main").classList.remove('input-Article1-Main-valid');
        SetREGEXtest(true)
      } 
      else {
        document.getElementById("Message").style.display = "block";
        document.getElementById("input-Article1-Main").classList.add('input-Article1-Main-valid');
        SetREGEXtest(false)
      }
    }
    function TESTurl (URLadress){
      URLadress=value
      validateURL(URLadress)
    }
    document.getElementById("BTNsubmit").addEventListener("click",TESTurl);


  // .............................copy link to clipboard...............................//

    let BTN = document.querySelectorAll(".btn-copy-link")
    let shortlink = document.querySelectorAll(".short-link")

    for(let i=0;i<BTN.length;i++){
        BTN[i].addEventListener('click',()=>{
            for(let j=0 ;j<BTN.length;j++){
                BTN[j].classList.remove('btn-copy-link-copied')
                BTN[j].innerHTML = " Copy"
            }
            BTN[i].classList.add('btn-copy-link-copied')  
            BTN[i].innerHTML = "copied"


        /*.............Copy the text inside the text field .............*/

            navigator.clipboard.writeText(shortlink[i].innerHTML);
        })
    }
  });

  return (
    <>
      <article className="container-Article1-Main">

        <header className="header-Article1-Main">
          <input type="url" required name="" id="input-Article1-Main" onChange={(e) => Setvalue(e.target.value)} value={value} className="input-Article1-Main" placeholder="Shorten a link here..." />
          <button onClick={GETdata} className="BTN-Article1-Main" id="BTNsubmit">{loading ? (<div className="container-Loader"><p>Loading...</p><img src={Loader} alt="" className="Loader-SVG"/></div>) : 'Shorten It!'}</button>
          <p className="p-valid-email" id="Message">please enter a valid URL address</p>
        </header>
          
        <main className="container-shorterlinks-Article1" id='shorterlinksArticle1' >
          {DefaultData.map((data, key) => {
                return (
                    <AppendLink  key={key} link={data.link} shortlink={data.shortlink} />
                );
              })
            }
        </main>

      </article>  
    </>
  )
};

export default Article1Main;
