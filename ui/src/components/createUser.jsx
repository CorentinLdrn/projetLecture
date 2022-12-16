import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [user, setUser] = useState({
    name: '',
    picture: '',
  });

  const createUser = () => {
    axios.post('http://localhost:5000/users', user).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <>
      <h2 className="pt-11 mb-6 font-bold font-MartianMono text-lg">
        Ajouter un nouvel utilisateur:
      </h2>
      <form onSubmit={createUser} className="flex flex-col gap-4">
        <label htmlFor="name">
          Nom *:
          <input
            className="min-w-[60vh]"
            id="name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </label>

        <label htmlFor="picture">
          Photo *:
          <input
            className="min-w-[60vh]"
            id="picture"
            type="text"
            value={user.picture}
            onChange={(e) => setUser({ ...user, picture: e.target.value })}
          />
        </label>

        <input
          className="text-start bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-w-[10vh] ml-[30vh]"
          type="submit"
          value="Ajouter"
        />
      </form>
    </>
  );
}

export default CreateUser;
