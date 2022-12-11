import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row justify-between px-36 bg-cyan-700 text-white font-bold py-2 min w-screen fixed">
      <Link to={"/"} className={location.pathname === "/" ? "underline" : ""}>
        Accueil
      </Link>
      <Link
        to={"/flux"}
        className={location.pathname === "/flux" ? "underline" : ""}
      >
        Activité
      </Link>
      <Link
        to={"/bookList"}
        className={location.pathname === "/bookList" ? "underline" : ""}
      >
        Listes
      </Link>
      <Link
        to={"/stats"}
        className={location.pathname === "/stats" ? "underline" : ""}
      >
        Statistiques
      </Link>
    </div>
  );
};

export default NavBar;
