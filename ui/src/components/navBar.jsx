import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function NavBar() {
  const location = useLocation();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users').then((allUsers) => {
      setUserList(allUsers.data);
    });
  }, []);

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
      <Link to="/auth">
        <div className="flex flex-row">
          {userList.map((user) => (
            <>
              <img
                alt=""
                src={user.picture}
                className="rounded-full w-[3vh] mr-3"
              />
              <p className={location.pathname === '/auth' ? 'underline' : ''}>
                {user.name}
              </p>{' '}
            </>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
