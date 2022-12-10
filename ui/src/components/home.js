import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [year, setYear] = useState(2022);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((allBooks) => {
      setBookList(allBooks.data);
    });
  }, []);
  const availableYears = [1995, 2021, 2022];

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col-reverse items-start justify-center gap-4 ml-4">
          {availableYears.map((year) => (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              key={year.toString()}
              onClick={() => setYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <Swiper
          className="w-5/6"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {bookList.map((book) =>
            book.reading === year ? (
              <SwiperSlide key={book._id}>
                <img
                  className="hover:opacity-80 h-full w-full"
                  src={book.cover}
                  alt=""
                />
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
        <Link to={"/bookList"} className="">
          <img src="/assets/menu.svg" alt="" className="w-8" />
        </Link>
      </div>
    </>
  );
};

export default Home;
