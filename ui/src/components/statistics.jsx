import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Statistics() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books').then((allBooks) => {
      setBookList(
        allBooks.data
          .filter((book) => book.user === localStorage.getItem('userId'))
          .filter((book) => book.status !== 'À lire'),
      );
    });
  }, []);

  const flagCorrespondance = {
    'Royaume-Uni':
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png',
    Autriche:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1920px-Flag_of_Austria.svg.png',
    France:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1920px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png',
    Russie:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png',
    Grèce:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1920px-Flag_of_Greece.svg.png',
    'États-Unis':
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
    Chine:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1920px-Flag_of_the_People%27s_Republic_of_China.svg.png',
    Espagne:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1920px-Bandera_de_Espa%C3%B1a.svg.png',
    Allemagne:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png',
    Italie:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1920px-Flag_of_Italy.svg.png',
    Brésil:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png',
    Pologne:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1920px-Flag_of_Poland.svg.png',
    'République tchèque':
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1920px-Flag_of_the_Czech_Republic.svg.png',
    Canada:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png',
    Suède:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png',
  };

  const centuryInfo = {
    '-5': {
      cover:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Akropolis_by_Leo_von_Klenze.jpg/1280px-Akropolis_by_Leo_von_Klenze.jpg',
      coverDetail:
        "Vue de l'Acropole et de l'Aréopage à Athènes, 1846, Leo von Klenze",

      romanNum: 'Ve siècle av. J.-C.',
    },
    15: {
      cover:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Benjamin-Constant-The_Entry_of_Mahomet_II_into_Constantinople-1876.jpg/800px-Benjamin-Constant-The_Entry_of_Mahomet_II_into_Constantinople-1876.jpg',
      coverDetail:
        "L'entrée du sultant Mehmet II à Constantinople, 1876, Benjamin-Constant",
      romanNum: 'XVe siècle',
    },
    16: {
      cover:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Creaci%C3%B3n_de_Ad%C3%A1n.jpg/1920px-Creaci%C3%B3n_de_Ad%C3%A1n.jpg',
      coverDetail: "La Création d'Adam, 1515, Michel-Ange",
      romanNum: 'XVIe siècle',
    },
    17: {
      cover:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Westfaelischer_Friede_in_Muenster_%28Gerard_Terborch_1648%29.jpg/1280px-Westfaelischer_Friede_in_Muenster_%28Gerard_Terborch_1648%29.jpg',
      coverDetail:
        'La Ratification du traité de Münster, 1648, Gerar ter Borch',
      romanNum: 'XVIIe siècle',
    },
    18: {
      cover:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prise_de_la_Bastille.jpg/1280px-Prise_de_la_Bastille.jpg',
      coverDetail: 'La Prise de la Bastille, 1789, Jean-Pierre Houël',
      romanNum: 'XVIIIe siècle',
    },
    19: {
      cover:
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Napoleon_in_burning_Moscow_-_Adam_Albrecht_%281841%29.jpg',
      coverDetail: 'Napoléon brulant Moscou, 1841, Adam Albrecht',
      romanNum: 'XIXe siècle',
    },
    20: {
      cover:
        'https://images.squarespace-cdn.com/content/v1/5b670534b98a78d5e84a7d19/1570810678882-V3UY49PCXUTU6Z9BWVSX/Raising+a+Flag+over+the+Reichstag+Yevgeny+Khaldei+1945.png',
      coverDetail: 'Le Drapeau rouge sur le Reichstag, 1945, Evgueni Khaldei',
      romanNum: 'XXe siècle',
    },
    21: {
      cover:
        'https://www.liberation.fr/resizer/aljGdWN_Tq7i585dTFuW6eco9II=/arc-photo-liberation/eu-central-1-prod/public/HGPSKOOLBZFIROZUKUIA2YL4CE.jpg',
      coverDetail: 'Les attentats du 11 septembre 2001',
      romanNum: 'XXIe siècle',
    },
  };

  const countriesList = bookList
    .map((book) => book.country)
    .filter(
      (item, index) =>
        bookList.map((book) => book.country).indexOf(item) === index,
    )
    .sort();

  const authorsList = bookList
    .map((book) => book.author)
    .filter(
      (item, index) =>
        bookList.map((book) => book.author).indexOf(item) === index,
    )
    .sort();

  const centuriesList = bookList
    .map((book) => book.parution)
    .sort()
    .map((element) =>
      element > 0 ? Math.ceil(element / 100) : Math.ceil(element / 100) - 1,
    )
    .filter(
      (item, index) =>
        bookList
          .map((book) => book.parution)
          .sort()
          .map((element) =>
            element > 0
              ? Math.ceil(element / 100)
              : Math.ceil(element / 100) - 1,
          )
          .indexOf(item) === index,
    );

  const authorsFromCountry = (country) =>
    bookList
      .map((book) => (book.country === country ? book.author : null))
      .filter(
        (item, index) =>
          bookList.map((book) => book.author).indexOf(item) === index,
      );

  const booksFromAuthor = (author) =>
    bookList
      .map((book) => (book.author === author ? book.title : null))
      .filter(
        (item, index) =>
          bookList.map((book) => book.title).indexOf(item) === index,
      );

  return (
    <>
      <h1 className="text-4xl font-bold underline mb-6 font-MartianMono ">
        Statistiques générales
      </h1>
      <div>
        <h2 className="text-2xl mb-4 font-MartianMono">
          Répartition par pays :
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4">
          {countriesList.map((country) => (
            <div className=" rounded-md border-2 border-blue-400 bg-slate-100 h-[30vh]">
              <h3 className="flex justify-center font-MartianMono">
                {country}
              </h3>
              <img
                src={flagCorrespondance[country]}
                alt=""
                className="h-24 mx-auto"
              />
              <h3 className="font-MartianMono ">
                Livres lus :{' '}
                {bookList
                  .map((book) => book.country)
                  .reduce(
                    (sum, member) => (member === country ? sum + 1 : sum),
                    0,
                  )}
              </h3>
              <div className="font-MartianMono ">
                Auteurs:{' '}
                <ul className="list-disc list-inside ml-4 pb-2 h-[13vh] overflow-y-auto">
                  {authorsFromCountry(country)
                    .sort()
                    .map((author) => (
                      <li>{author}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div>
        <h2 className="text-2xl mb-4 font-MartianMono">
          Répartition par auteur :
        </h2>
        {authorsList.map((author) => (
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <bold className=" ml-16 font-MartianMono">{author}: </bold>
              <strong className=" font-MartianMono text-center">
                {' '}
                {bookList
                  .map((book) => book.author)
                  .reduce(
                    (sum, member) => (member === author ? sum + 1 : sum),
                    0,
                  )}{' '}
              </strong>
            </div>
            <p className=" col-span-8 font-MartianMono">
              {' '}
              ( Livres :{' '}
              {booksFromAuthor(author)
                .sort()
                .map((book) => (
                  <li className="inline">{book}. </li>
                ))}
              )
            </p>
          </div>
        ))}
      </div>
      <br />
      <div>
        <h2 className="text-2xl mb-4 font-MartianMono">
          Répartition par siècle :
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-4">
          {centuriesList.map((century) => (
            <div className=" rounded-md border-2 border-blue-400 bg-slate-100">
              <h3 className="flex justify-center font-MartianMono">
                {centuryInfo[century].romanNum}
              </h3>
              <img
                src={centuryInfo[century].cover}
                alt=""
                className="h-64 mx-auto"
              />
              <small className="flex justify-center mb-4 font-MartianMono">
                {centuryInfo[century].coverDetail}
              </small>
              <h3 className="font-MartianMono">
                Livres lus:{' '}
                {bookList
                  .map((book) => book.parution)
                  .map((element) =>
                    element > 0
                      ? Math.ceil(element / 100)
                      : Math.ceil(element / 100) - 1,
                  )
                  .reduce(
                    (sum, member) => (member === century ? sum + 1 : sum),
                    0,
                  )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Statistics;
