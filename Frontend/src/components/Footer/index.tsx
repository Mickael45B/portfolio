// import { useState } from "react";
// import "./index.css";

function Footer() {
  return <>
      <footer className="footer w-full">
        <div className="contenairFooter flex flex-col items-center">
          <div className="miseEnValeur flex w-full place-content-center">-- mise en valeur --</div>
          <div className="flex w-full place-content-around">
            <div>documents Légaux</div>
            <div>plan du site</div>
            <div>Qui sommes nous?</div>
            <div>nous rejoindre</div>
          </div>
          <div className="reseauxSociaux flex w-full place-content-center">-- nous suivre--</div>
          <div className="createurSite flex w-full place-content-center">site crée par ...</div>
        </div>
      </footer>
  </>
}

export default Footer;
