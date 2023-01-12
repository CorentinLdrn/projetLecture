import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <div className="flex flex-row justify-around  bg-blue-400 text-slate-100 font-bold w-screen fixed bottom-[95vh] font-MartianMono text-lg h-[5vh] items-center">
      <Link
        to="/"
        className={
          location.pathname === '/'
            ? 'underline flex flex-row items-center gap-2'
            : 'flex flex-row items-center gap-2'
        }
      >
        <img src="/assets/accueil.svg" alt="accueil" className="w-6" />
        <strong className="hidden md:block">Accueil</strong>
      </Link>
      <Link
        to="/flux"
        className={
          location.pathname === '/flux'
            ? 'underline flex flex-row items-center gap-2'
            : ' flex flex-row items-center gap-2'
        }
      >
        <img src="/assets/activite.svg" alt="activite" className="w-6" />

        <strong className="hidden md:block">Activité</strong>
      </Link>
      <Link
        to="/bookList"
        className={
          location.pathname === '/bookList'
            ? 'underline flex flex-row items-center gap-2'
            : 'flex flex-row items-center gap-2'
        }
      >
        {' '}
        <img src="/assets/listes.svg" alt="listes" className="w-6" />
        <strong className="hidden md:block">Listes</strong>
      </Link>
      <Link
        to="/stats"
        className={
          location.pathname === '/stats'
            ? 'underline flex flex-row items-center gap-2'
            : 'flex flex-row items-center gap-2'
        }
      >
        <img src="/assets/statistics.svg" alt="statistics" className="w-6" />

        <strong className="hidden md:block">Statistiques</strong>
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
            className="rounded-full w-[3vh] mr-3 "
          />
          <p
            className={
              location.pathname === '/settings'
                ? 'underline hidden md:block'
                : 'hidden md:block'
            }
          >
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
