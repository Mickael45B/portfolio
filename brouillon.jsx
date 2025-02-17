<div className="bg-gradient-to-br from-blue-500 to-red-500 p-[9px] rounded-lg">
<div className="bg-white rounded-lg p-4">
  Contenu ici
</div>
</div>


//afficher pdf

<main className="flex flex-row items-center w-full h-full ">

<div className="w-140 h-200 flex justify-center items-center">
<object 
data="/modelesCV.pdf" 
type="application/pdf" 
className="w-full h-full"
title="toto"
>
<p>
          Votre navigateur ne peut pas afficher le PDF. 
          <a href="/modelesCV.pdf" download>
            Cliquez ici pour le télécharger.
          </a>
        </p>

</object>
</div>
  </main>