import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/effect-coverflow';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper';

function Home() {
  const [bookList, setBookList] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    axios.get('http://localhost:5000/books').then((allBooks) => {
      setBookList(allBooks.data);
    });
  }, []);
  const availableYears = bookList
    .map((book) => book.reading)
    .filter(
      (item, index) =>
        bookList.map((book) => book.reading).indexOf(item) === index,
    )
    .filter(Number)
    .sort();

  return (
    <div className="flex flex-row mt-[5vh] h-[90vh]">
      <div className="flex flex-col-reverse items-start justify-center gap-4 ml-4">
        {availableYears.map((availableYear) => (
          <button
            type="button"
            className={
              availableYear === selectedYear
                ? 'bg-blue-400 text-white font-bold  py-2 px-4 border border-blue-500 hover:border-transparent rounded font-MartianMono'
                : 'bg-transparent hover:bg-blue-400 text-blue-400 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-MartianMono'
            }
            key={availableYear.toString()}
            onClick={() => {
              setSelectedYear(availableYear);
            }}
          >
            {availableYear}
          </button>
        ))}
      </div>
      <Swiper
        className="w-5/6  h-[90%] my-auto"
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}
      >
        {bookList.map((book) =>
          book.reading === selectedYear ? (
            <SwiperSlide key={book.id}>
              <img
                className="hover:opacity-80 h-full "
                src={book.cover}
                alt=""
              />
            </SwiperSlide>
          ) : null,
        )}
      </Swiper>
    </div>
  );
}

export default Home;
