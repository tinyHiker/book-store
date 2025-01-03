import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getImgUrl } from '../../utils/getImgUrl';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading book info</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md border border-gray-200">
      {/* Container for image and book details in two columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Book Cover Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-auto object-cover rounded-md md:max-w-xs"
          />
        </div>

        {/* Book Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {book.title}
          </h1>

          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              <strong>Author:</strong> {book.author || 'admin'}
            </p>
            <p className="text-gray-700">
              <strong>Published:</strong>{' '}
              {new Date(book?.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 capitalize">
              <strong>Category:</strong> {book.category}
            </p>
            <p className="text-gray-700">
              <strong>Description:</strong> {book.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(book)}
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
