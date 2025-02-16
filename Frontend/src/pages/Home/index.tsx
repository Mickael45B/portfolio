// import { useState } from "react";
// import './index.css';

function Home() {
  return (
    <>
      <main className="flex flex-row items-center w-full h-full">
        
        <div className="flex flex-col basis-3/5 w-full h-full justify-center items-center">
          <p>Brissot Michael, developpeur full stack.</p>
          <p>"Un backend solide pour des projets qui tiennent la route."</p>
          <p className="w-4xl leading-7">Passionné par l’optimisation et la logique métier, je développe des applications robustes et évolutives. Autodidacte depuis 10 ans, j'aime partager mes connaissances et rendre le développement accessible aux nouvelles générations.</p>
        </div>
        <div className="basis-2/5 w-full h-full bg-[url(../partie-droite.jpg)] bg-cover bg-center">
        </div>
      </main>
    </>
  );
}

export default Home;
