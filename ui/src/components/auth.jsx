import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Auth() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books').then((allBooks) => {
      setBookList(allBooks.data.filter((book) => book.status === 'Lu'));
    });
  }, []);

  const coverList = bookList.map((book) => book.cover);

  return (
    <div className="pt-11 flex flex-col w-3/5 mx-auto">
      <div className="flex flex-row">
        <div className=" w-1/2 h-[70vh] flex justify-center items-center">
          <div className="m-28 ">
            <img
              src={coverList[Math.floor(Math.random() * coverList.length + 1)]}
              alt={coverList[Math.floor(Math.random() * coverList.length + 1)]}
              className="rounded-xl "
            />
          </div>
        </div>
        <div className=" w-1/2 h-[70vh] flex justify-center items-center">
          <div className=" bg-blue-400 w-5/6 h-5/6 rounded-xl">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-slate-100 font-bold font-MartianMono pt-10 text-2xl">
                Bon retour parmi nous !
              </h1>
              <h3 className="text-slate-100 font-normal font-MartianMono">
                Nous sommes très excité de vous voir à nouveau...
              </h3>
            </div>
            <form className="flex flex-col mt-12">
              <label htmlFor="login" className="text-slate-100 px-12">
                {' '}
                EMAIL OR PHONE NUMBER <br />
                <input
                  type="text"
                  id="login"
                  className="w-full h-[3vh] text-blue-400 rounded-md mt-1"
                />
              </label>
              <label htmlFor="password" className="text-slate-100 mt-3 px-12">
                {' '}
                PASSWORD <br />
                <input
                  type="password"
                  id="password"
                  className="w-full h-[3vh] text-blue-400 rounded-md mt-1"
                />
              </label>
              <small className="px-12 mt-1 font-MartianMono text-slate-100">
                Forgot your password?
              </small>
              <input
                type="submit"
                value="Login"
                className="bg-slate-100 mt-4 mx-auto px-6 py-1 rounded-md text-blue-400 hover:bg-blue-400 hover:text-slate-100 border-slate-100 border-2 cursor-pointer"
              />
            </form>
            <div className="flex justify-end pr-12 mt-4">
              <small className="text-slate-100">
                Pas encore de compte ? <strong>S&apos;enregistrer</strong>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[20vh] flex justify-center items-center">
        <div className="bg-blue-400 w-11/12 h-5/6 rounded-xl p-6">
          <p className="text-slate-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum turpis ac ex ultrices sodales. Integer malesuada augue eget
            rutrum feugiat. Sed vel elit id turpis imperdiet ultricies. Vivamus
            quis tempor elit.
            <br />
            <br /> In et enim luctus, euismod elit vitae, fringilla tortor. Duis
            condimentum volutpat laoreet. Ut et felis a eros sollicitudin
            porttitor sed ut odio. Sed vel elit id turpis imperdiet ultricies.
            Vivamus quis tempor elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
