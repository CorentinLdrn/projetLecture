import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <div className="flex flex-row justify-between px-36 bg-blue-400 text-slate-100 font-bold w-screen fixed bottom-[95vh] font-MartianMono text-lg h-[5vh] items-center">
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
      <Link to="/settings">
        <div className="flex flex-row">
          <img
            alt=""
            src={
              localStorage.getItem('profilePic')
                ? localStorage.getItem('profilePic')
                : 'https://www.meme-arsenal.com/memes/baad48b22ac23afb44f5a24915bca8f8.jpg'
            }
            className="rounded-full w-[3vh] mr-3"
          />
          <p className={location.pathname === '/auth' ? 'underline' : ''}>
            {localStorage.getItem('name')
              ? localStorage.getItem('name')
              : 'Se connecter'}
          </p>{' '}
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
