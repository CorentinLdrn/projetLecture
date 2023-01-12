import React from 'react';
import { signInWithGoogle } from '../firebase';

function Settings() {
  return (
    <div className="flex justify-center items-center h-[90vh] ">
      {localStorage.getItem('userId') ? (
        <div className="flex flex-col items-center gap-1">
          {' '}
          <img
            alt=""
            src={localStorage.getItem('profilePic')}
            className="rounded-full w-[9vh] mr-3"
          />
          <h1 className="text-white font-bold text-2xl ">
            {localStorage.getItem('name')}
          </h1>
          <h2 className="text-white text-lg">{localStorage.getItem('mail')}</h2>
          <h3 className="text-white ">
            User ID : {localStorage.getItem('userId')}
          </h3>
        </div>
      ) : (
        <button
          type="button"
          className='className="bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"'
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default Settings;
