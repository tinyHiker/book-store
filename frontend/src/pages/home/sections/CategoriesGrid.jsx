import React from 'react';

const CategoriesGrid = () => {
  const categories = [
    {
        name: "Fantasy",
        link: ""
    },
    {
        name: "Science Fiction",
        link: ""
    },
    {
        name: "Superhero",
        link: ""
    },
    {
        name: "Dystopian Fantasy",
        link: ""
    },
    {
        name: "Mystery",
        link: ""
    },
    {
        name: "Horror",
        link: ""
    }
    
  ];

  return (
    <div className="py-10 px-5">
      <h2 className="text-3xl font-semibold mb-6 text-center ">Popular Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-black text-white text-center p-6 rounded flex justify-center h-25 w-90 border-r-transparent border-r-8 hover:text-yellow-300 hover:scale-105">
            <h3 className="text-xl">{category.name}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
