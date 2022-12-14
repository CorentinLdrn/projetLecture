import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <div className="flex flex-row justify-between px-36 bg-blue-400 text-slate-100 font-bold py-2 min w-screen fixed font-MartianMono text-lg mb-48">
      <Link to="/" className={location.pathname === '/' ? 'underline' : ''}>
        Accueil
      </Link>
      <Link
        to="/flux"
        className={location.pathname === '/flux' ? 'underline' : ''}
      >
        Activité
      </Link>
      <Link
        to="/bookList"
        className={location.pathname === '/bookList' ? 'underline' : ''}
      >
        Listes
      </Link>
      <Link
        to="/stats"
        className={location.pathname === '/stats' ? 'underline' : ''}
      >
        Statistiques
      </Link>
    </div>
  );
}

export default NavBar;
