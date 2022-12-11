import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((allBooks) => {
      setBookList(allBooks.data);
    });
  }, []);

  const flagCorrespondance = {
    "Royaume-Uni":
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png",
    Autriche:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1920px-Flag_of_Austria.svg.png",
    France:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1920px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png",
    Russie:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png",
    Grèce:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1920px-Flag_of_Greece.svg.png",
  };

  const centuryInfo = {
    "-5": {
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Akropolis_by_Leo_von_Klenze.jpg/1280px-Akropolis_by_Leo_von_Klenze.jpg",
      coverDetail:
        "Vue de l'Acropole et de l'Aréopage à Athènes, 1846, Leo von Klenze",

      romanNum: "Ve siècle av. J.-C.",
    },
    17: {
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Westfaelischer_Friede_in_Muenster_%28Gerard_Terborch_1648%29.jpg/1280px-Westfaelischer_Friede_in_Muenster_%28Gerard_Terborch_1648%29.jpg",
      coverDetail:
        "La Ratification du traité de Münster, 1648, Gerar ter Borch",
      romanNum: "XVIIe siècle",
    },
    18: {
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prise_de_la_Bastille.jpg/1280px-Prise_de_la_Bastille.jpg",
      coverDetail: "La Prise de la Bastille, 1789, Jean-Pierre Houël",
      romanNum: "XVIIIe siècle",
    },
    19: {
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Napoleon_in_burning_Moscow_-_Adam_Albrecht_%281841%29.jpg",
      coverDetail: "Napoléon brulant Moscou, 1841, Adam Albrecht",
      romanNum: "XIXe siècle",
    },
    20: {
      cover:
        "https://images.squarespace-cdn.com/content/v1/5b670534b98a78d5e84a7d19/1570810678882-V3UY49PCXUTU6Z9BWVSX/Raising+a+Flag+over+the+Reichstag+Yevgeny+Khaldei+1945.png",
      coverDetail: "Le Drapeau rouge sur le Reichstag, 1945, Evgueni Khaldei",
      romanNum: "XXe siècle",
    },
    21: {
      cover:
        "https://www.liberation.fr/resizer/aljGdWN_Tq7i585dTFuW6eco9II=/arc-photo-liberation/eu-central-1-prod/public/HGPSKOOLBZFIROZUKUIA2YL4CE.jpg",
      coverDetail: "Les attentats du 11 septembre 2001",
      romanNum: "XXIe siècle",
    },
  };

  const countriesList = bookList
    .map((book) => book.country)
    .filter(
      (item, index) =>
        bookList.map((book) => book.country).indexOf(item) === index
    )
    .sort();

  const authorsList = bookList
    .map((book) => book.author)
    .filter(
      (item, index) =>
        bookList.map((book) => book.author).indexOf(item) === index
    )
    .sort();

  const centuriesList = bookList
    .map((book) => book.parution)
    .sort()
    .map((element) =>
      element > 0 ? Math.ceil(element / 100) : Math.ceil(element / 100) - 1
    )
    .filter(
      (item, index) =>
        bookList
          .map((book) => book.parution)
          .sort()
          .map((element) =>
            element > 0
              ? Math.ceil(element / 100)
              : Math.ceil(element / 100) - 1
          )
          .indexOf(item) === index
    );

  const authorsFromCountry = (country) => {
    return bookList
      .map((book) => (book.country === country ? book.author : null))
      .filter(
        (item, index) =>
          bookList.map((book) => book.author).indexOf(item) === index
      );
  };

  const booksFromAuthor = (author) => {
    return bookList
      .map((book) => (book.author === author ? book.title : null))
      .filter(
        (item, index) =>
          bookList.map((book) => book.title).indexOf(item) === index
      );
  };

  return (
    <>
      <h1 className="text-4xl font-bold underline mb-6">
        Statistiques générales
      </h1>
      <div>
        <h2 className="text-2xl mb-4">Répartition par pays :</h2>
        <div className="grid grid-cols-5 gap-4 mx-4">
          {countriesList.map((country) => (
            <div className=" rounded-md border-2 border-red-200">
              <h3 className="flex justify-center">{country}</h3>
              <img
                src={flagCorrespondance[country]}
                alt=""
                className="h-24 mx-auto"
              />
              <h3>
                Livres lus :{" "}
                {bookList
                  .map((book) => book.country)
                  .reduce(
                    (sum, member) => (member === country ? sum + 1 : sum),
                    0
                  )}
              </h3>
              <div>
                Auteurs:{" "}
                <ul className="list-disc list-inside ml-4 pb-2">
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
      <br></br>
      <div>
        <h2 className="text-2xl mb-4">Répartition par auteur :</h2>
        {authorsList.map((author) => (
          <div className="grid grid-cols-12">
            <bold className=" col-span-2 ml-16">{author}: </bold>
            <strong className=" col-span-1">
              {" "}
              {bookList
                .map((book) => book.author)
                .reduce(
                  (sum, member) => (member === author ? sum + 1 : sum),
                  0
                )}{" "}
            </strong>
            <p className=" col-span-8">
              {" "}
              ( Livres :{" "}
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
      <br></br>
      <div>
        <h2 className="text-2xl mb-4">Répartition par siècle :</h2>
        <div className="grid grid-cols-4 gap-4 mx-4">
          {centuriesList.map((century) => (
            <div className=" rounded-md border-2 border-red-200">
              <h3 className="flex justify-center">
                {centuryInfo[century].romanNum}
              </h3>
              <img
                src={centuryInfo[century].cover}
                alt=""
                className="h-64 mx-auto"
              />
              <small className="flex justify-center mb-4">
                {centuryInfo[century].coverDetail}
              </small>
              <h3>
                Livres lus:{" "}
                {bookList
                  .map((book) => book.parution)
                  .map((element) =>
                    element > 0
                      ? Math.ceil(element / 100)
                      : Math.ceil(element / 100) - 1
                  )
                  .reduce(
                    (sum, member) => (member === century ? sum + 1 : sum),
                    0
                  )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Statistics;
