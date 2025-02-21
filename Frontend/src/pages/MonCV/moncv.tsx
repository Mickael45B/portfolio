//  import { useState } from "react";
// import './index.css';

import { useEffect, useState } from "react";

function CuVi() {

  const [pdfExists, setPdfExists] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/modelesCV.pdf", { method: "HEAD" })
      .then((res) => {
        const contentType = res.headers.get("Content-Type");
        if (res.ok && contentType?.includes("application/pdf")) {
          setPdfExists(true);
        } else {
          setPdfExists(false);
        }
      })
      .catch(() => setPdfExists(false));
  }, []);
  {console.log(pdfExists);}
  return (
    
    <>
      <main className="flex flex-row items-center w-full h-full ">
        <div className="w-140 h-200 flex justify-center items-center">
          { pdfExists === null ? (
            <p>Chargement...</p>
          ) : pdfExists ? (
            <iframe title="mon CV" src="/modelesCV.pdf" className="w-full h-full"></iframe>
          ) : (
            <p className="text-red-500">⚠️ Le CV n'est pas disponible.</p>
          )}
        </div>
        <div className="w-full h-full">partie droite</div>
      </main>
    </>
  );
}

export default CuVi;


