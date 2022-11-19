import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const BookInfo = () => {
  return <h1>BookName</h1>;
};

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [year, setYear] = useState(2022);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/books").then((allBooks) => {
      setBookList(allBooks.data);
    });
  }, []);
  const availableYears = [2020, 2021, 2022];

  return (
    <>
      <Link to={"/bookList"}>Liste</Link>
      {availableYears.map((year) => (
        <button key={year.toString()} onClick={() => setYear(year)}>
          {year}
        </button>
      ))}

      <Swiper
        //loop={true}
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
        className="mySwiper"
      >
        {bookList.map((book) =>
          book.reading === year ? (
            <SwiperSlide
              key={book._id}
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <img src={book.cover} alt="" />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
      {visible && <BookInfo />}
    </>
  );
};

export default Home;
