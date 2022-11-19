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
  useEffect(() => {
    axios.get("http://localhost:5000/books").then((allBooks) => {
      setBookList(allBooks.data);
    });
  }, []);

  return (
    <>
      <Link to={"/bookList"}>Liste</Link>
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
          book.reading === 2022 ? (
            <SwiperSlide>
              <img src={book.cover} alt="" />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </>
  );
};

export default Home;
