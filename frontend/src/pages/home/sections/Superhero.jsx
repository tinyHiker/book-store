import React, {useEffect, useState} from 'react'
import BookCard from '../../books/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../../redux/features/books/booksApi';
import { Link } from 'react-router-dom';

const Superhero = () => {
    const {data: books = []} = useFetchAllBooksQuery()

    let filteredBooks = books.filter(book => book.category === "superhero")
    

  return (
    <div className="py-10">
        <h2 className="text-3xl font-semibold mb-9 text-center">Superhero</h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                <SwiperSlide key={index}><BookCard key={index} book={book}/></SwiperSlide>
                
            ))
        }
        
        
      </Swiper>


      <div className="mt-8 flex justify-center">
        <Link to="/books/all" className="bg-yellow border-2 border-black hover:border-transparent hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded transition-all duration-150">
        View All
        </Link>
        </div>


       

    </div>
  )
}

export default Superhero