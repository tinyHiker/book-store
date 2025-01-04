import React from 'react';
import BookCard from '../../books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../../redux/features/books/booksApi';
import { Link } from 'react-router-dom';

const IceAndFire = () => {
    const { data: books = [] } = useFetchAllBooksQuery();

    // Specify the ObjectId you're looking for
    const specificAuthorId = "6771c032474d85e3cecaaeea";

    // Filter books where the first author's ObjectId matches specificAuthorId
    let filteredBooks = books.filter(book => book.authors.length > 0 && book.authors[0] === specificAuthorId);

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-9 text-center">A Song of Ice & Fire - George's Book Club</h2>

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
    );
}

export default IceAndFire;