import React from "react";
import "./Layout.css"
import Logo from "../../assets/svg/logo.svg"
import Menu from "../../assets/svg/icon-hamburger.svg"
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Layout (){

  useEffect(() => {
    let BOXul = document.getElementById("BOX-ul")
    let hamburger = document.getElementById("BTNMenu")
    hamburger.addEventListener("click",()=>{BOXul.classList.toggle('openBOX') })
  }, []);

  return (
    <>
      <article className="article-PC-NAV">
        <nav className="PC-NAV" id="PC-NAV">
            <img src={Logo} alt="" />
            <ul className="PC-ul">
              <li className="PC-li">
                <Link className="PC-NAVlink" to="/" id="PC-Home">Home</Link>
              </li>
              <li className="PC-li">
                <Link className="PC-NAVlink" to="/Features" id="PC-Features">Features</Link>
              </li>
              <li className="PC-li">
                <Link className="PC-NAVlink" to="/Pricing">Pricing</Link>
              </li>
              <li className="PC-li">
                <Link className="PC-NAVlink" to="/Resources">Resources</Link>
              </li>
              <li className="PC-li PC-li-right">
                <Link className="PC-NAVlink" to="">Login</Link>
                <Link className="PC-NAVlink Sign-Up" to="">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </article>

        <article className="article-Mobile-NAV">
          <nav className="Mobile-NAV" id="Mobile-NAV">
            <img src={Menu} className="BTNMenu" id="BTNMenu" alt="Menu" />
            <img src={Logo} className="Mobile-Logo" alt="Logo" />
            <div className="BOX-ul" id="BOX-ul" >
              <ul className="Mobile-ul">
                <li className="Mobile-li">
                  <Link className="Mobile-NAVlink" to="/" id="Mobile-Home">Home</Link>
                </li>
                <li className="Mobile-li">
                  <Link className="Mobile-NAVlink" to="/Features" id="Mobile-Features">Features</Link>
                </li>
                <li className="Mobile-li">
                  <Link className="Mobile-NAVlink" to="/Pricing">Pricing</Link>
                </li>
                <li className="Mobile-li">
                  <Link className="Mobile-NAVlink" to="/Resources">Resources</Link>
                </li>
                <span className="line-NAV" />
                <li className="Mobile-li">
                  <Link className="Mobile-NAVlink" to="">Login</Link>
                </li>
                  <Link className="Mobile-NAVlink Mobile-Sign-Up" to="">Sign Up</Link>
              </ul>
            </div>
          </nav>
      </article>
    </>
  )
};

export default Layout;