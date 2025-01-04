
import React from 'react';
import { Link } from 'react-router-dom';

const BookTransitionCard = ({ book }) => {
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white p-8  flex">
      <img src={book.coverImage} alt={book.title} className="w-75 h-auto mr-8"/>

      <div className="flex flex-col justify-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
          <p className="text-lg text-gray-700 mb-2">Paperback by {book.author}</p>
          <div className="text-xl font-bold mb-2">
            <span className="text-red-600 line-through mr-2">${book.oldPrice}</span>
            <span>${book.newPrice}</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Shipping will be calculated at checkout.</p>
        </div>

        <div>
          <div className="flex gap-4 mb-4">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">Add to Cart</button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Buy with Shop Pay</button>
          </div>
          <Link to="/more-details" className="text-blue-500 hover:text-blue-600">Full details →</Link>
        </div>
      </div>
    </div>
  );
};

export default BookTransitionCard;


/*import React from 'react';
import { Link } from 'react-router-dom';

const BookTransitionCard = ({ book }) => {
  return (
    <div className="max-w-lg mx-auto my-12 bg-white p-8">
      <div className="flex flex-col items-center">
        <img src={book.coverImage} alt={book.title} className="w-75 mb-4"/>
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p className="text-lg text-gray-700 mb-2">Paperback by {book.author}</p>
        <p className="text-red-600 line-through">${book.oldPrice}</p>
        <p className="text-xl font-bold mb-4">${book.newPrice}</p>
        <p className="text-sm text-gray-600 mb-4">Shipping will be calculated at checkout.</p>
        <div className="flex gap-4">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">Add to Cart</button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Buy with Shop Pay</button>
        </div>
        <Link to="/more-details" className="text-blue-500 hover:text-blue-600 mt-4">Full details →</Link>
      </div>
    </div>
  );
};

export default BookTransitionCard; */