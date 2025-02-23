// import { useState } from "react";
// import "./index.css";
import image from "/partie-droite.jpg";

function AllProjects() {
    return <>
    <main className="grid p-4 grid-cols-1 gap-4 items-center w-80/100 h-full justify-center  ">

      <div className="h-80 border border-indigo-600 rounded-xl drop-shadow-2xl justify-center p-1 bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
        <div className="flex w-full h-full rounded-xl p-4 bg-white dark:bg-gray-900">

          <div className="flex flex-col justify-between w-5/6 border border-indigo-600 items-center p-4">
            <div className="text-4xl font-bold">TITRE</div>
            <div className="flex justify-around w-full">
              <span>LANGUAGES</span>
              <span>LANGUAGES</span>
              <span>LANGUAGES</span>
              <span>LANGUAGES</span>
              <span>LANGUAGES</span>
            </div>
            <div className="flex text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, totam! Itaque repellat eum consequuntur quidem, nam porro voluptates placeat sunt, modi delectus, cupiditate deserunt? Neque magni molestias provident necessitatibus omnis?</div>
            <div  className="flex justify-around w-full">
              <span>bouton</span>
              <span>bouton</span>
            </div>
          </div>

          <div className="flex w-1/6 border border-indigo-600 p-4 "> <img src={image} alt="Logo" className="aspect-video" /> </div>
          
        </div>
      </div>
      
      <div className="h-80 border border-indigo-600 rounded-xl drop-shadow-2xl justify-center p-1 bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
        <div className="flex w-full h-full rounded-xl p-4 bg-white dark:bg-gray-900">
        
          <div className="flex w-1/6 border border-indigo-600 p-4 "> <img src={image} alt="Logo" className="aspect-video" /> </div>

          <div className="flex flex-col justify-between w-5/6 border border-indigo-600 items-center p-4">
            <div className="text-4xl font-bold">TITRE</div>
            <div className="flex justify-around w-full">
              <span>LANGUAGES</span>
              <span>LANGUAGES</span>
              <span>LANGUAGES</span>
              <span>LANGUAGES</span>
              <span>LANGUAGES</span>
            </div>
            <div className="flex text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, totam! Itaque repellat eum consequuntur quidem, nam porro voluptates placeat sunt, modi delectus, cupiditate deserunt? Neque magni molestias provident necessitatibus omnis?</div>
            <div  className="flex justify-around w-full">
              <span>bouton</span>
              <span>bouton</span>
            </div>
          </div>

        </div>
      </div>
      
    </main>
    </>
  }
  
  export default AllProjects;
  