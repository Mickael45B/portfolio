// import { useState } from "react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
// import "./index.css";

// Typage des props du composant
type CustomNavLinkProps = {
  to: string;
  children: ReactNode;
};

const CustomNavLink = ({ to, children }: CustomNavLinkProps) => {
  const baseClass = "text-blue-500 hover:text-blue-700 flex justify-center items-center ";
  const activeClass = "active text-white rounded-full flex drop-shadow-2xl justify-center p-1 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? activeClass : baseClass
      }end>
      <li className="">{children}</li>
    </NavLink>
  );
};

function Header() {
  return (
    <div className="p-4 text-center flex w-full place-content-between bg-amber-900/10">
      <h1 className="flex flex-col"><span>portfolio</span> <span>Brissot Michael</span></h1>
      <nav className="flex gap-4">
        <ul className="grid grid-cols-5 gap-4">
          <CustomNavLink to="/">Accueil</CustomNavLink>
          <CustomNavLink to="/Mon_CV">CV</CustomNavLink>
          <CustomNavLink to="/projects">Projets</CustomNavLink>
          <CustomNavLink to="/contact">Contact</CustomNavLink>
          <CustomNavLink to="/project">(temporaire)</CustomNavLink>
        </ul>
      </nav>
      <div>
        <div>
          <span>derniere mise à jour :</span>
          <span>16/02/2025</span>
        </div>
        <div>
          sombre/clair
        </div>
      </div>
    </div>
  );
}

export default Header;