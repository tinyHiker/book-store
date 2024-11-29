import React, {useEffect, useState} from 'react'
import BookCard from '../books/BookCard'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/navigation';




const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {
    const [books, setBooks] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre")

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then((data) => setBooks(data))
    }, [])

    let filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())
    console.log(filteredBooks)

  return (
    <div className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

        {/* category filtering */}
        <div className="mb-8 flex items-center">
            <select onChange={(e) => setSelectedCategory(e.target.value)} name="category" id="category" className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none" >
                {
                    categories.map((category,index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
                
            </select>
        </div>

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

       

    </div>
  )
}

export default TopSellers