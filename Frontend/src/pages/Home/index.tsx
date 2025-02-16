// import { useState } from "react";
// import './index.css';

function Home() {
  return (
    <>
      <main className="flex flex-row items-center w-full h-full ">
        
        <div className="flex flex-col basis-3/5 w-full h-full justify-around items-center p-28">
          <p className="text-4xl">Brissot Michael, developpeur full stack.</p>
          <div className="flex flex-col justify-center items-center">
            <p className="leading-9 mb-8">"Simple, rapide, efficace." Tel est ma devise.</p>
            <p className="w-4xl leading-7 flex text-center font-sans">Passionné par l’optimisation et la logique métier, je développe des applications robustes et évolutives. Autodidacte depuis 10 ans, j'aime partager mes connaissances et rendre le développement accessible aux nouvelles générations.</p>
          </div>
        </div>
        <div className="basis-2/5 w-full h-full p-8">
        <div className=" w-full h-full bg-[url(../partie-droite.jpg)] bg-cover bg-center"></div>
        </div>
      </main>
    </>
  );
}

export default Home;
