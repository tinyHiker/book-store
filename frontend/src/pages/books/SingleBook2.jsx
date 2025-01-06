

import React from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';
import { Link } from 'react-router-dom';
const SingleBook =  () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
  

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  

  

  if (isLoading || !book.authors) return <div>Loading...</div>;
  if (isError ) return <div>Error loading book info</div>;


  
  console.log(book.authors)
  let authors_text = book.authors.map(author => {
    return <Link to={`authors/${author._id}`}><span className="text-blue-600">{author.fullName}</span></Link>
  })


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white  rounded-md  border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Book Cover Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full h-auto object-cover rounded-md md:max-w-xs"
          />
        </div>

        {/* Book Info */}
        <div className='mt-11'>
          <h1 className="text-xl text-gray-800 mb-2 text-center">
            <div className="mb-5 font-bold text-4xl">{book.title}</div> - Written by {authors_text}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
             <strong>{book.authors?.map(author => author.name).join(', ')}</strong>
          </p>
          <div className="text-lg mb-4 text-center">
            <span className="font-bold text-gray-800">${book.newPrice}</span>
            {book.oldPrice && (
              <span className="ml-2 text-gray-500 line-through">${book.oldPrice}</span>
            )}
          </div>
          <div className="mb-2 text-center">
            <span className="text-sm text-gray-500"><Link to="/shipping" className="text-blue-500 underline hover:text-black">Shipping</Link> will be calculated at checkout.</span>
          </div>
          <div className="mb-4">
            <span className="text-sm text-green-600">Only {book.stock} left in stock.</span>
          </div>

          {/* Add to Cart and Wishlist Buttons */}
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => handleAddToCart(book)}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              disabled={book.stock < 1}
            >
              <FiShoppingCart />
              <span>Add to Cart</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors">
              <FiHeart />
              <span>Add to Wishlist</span>
            </button>
          </div>

          {/* Preview */}
          <div className=" font-secondary mt-7 w-200">
            <p className="text-md text-gray-700"><span className= "font-bold">Preview: </span>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
