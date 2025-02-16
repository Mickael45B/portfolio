// import { useState } from "react";
// import "./index.css";

import { Link } from "react-router-dom";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";

function Footer() {
  return <>
      <footer className="footer w-full  bg-amber-900/10">
        <div className="contenairFooter flex flex-col items-center">
          <div className="miseEnValeur flex w-full place-content-center">© Brissot Michael. Tous droits réservés.</div>
          <div className="flex w-full place-content-around">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="reseauxSociaux flex w-full place-content-center items-center h-10 p-2 ">
            <span className="p-2">
              <Link to="https://www.facebook.com/michael.dev.45000"><TiSocialFacebook /></Link>
            </span>
            <span className="p-2">
              <Link to="https://github.com/Mickael45B">
              <SlSocialGithub /></Link></span>
            <span className="p-2">
              <Link to="https://www.linkedin.com/in/michael-brissot"><TiSocialLinkedin /></Link></span>
          </div>
          <div className="createurSite flex w-full place-content-center"></div>
        </div>
      </footer>
  </>
}

export default Footer;
