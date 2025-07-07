import React from 'react';

function MenuFilter({ onCategoryChange }) {
  const categories = ['Breakfast', 'Lunch', 'Dinner'];

  return (
    <div className="menu-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className="filter-button" // Add a class for styling
        >
          {category}
        </button>
      ))}
      <style>{`
  .menu-filter {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .filter-button {
    padding: 20px 20px;
    margin: 0 10px;
    background-color: rgb(244, 244, 244);
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
  }

  .filter-button:hover {
    background-color: #ccc;
  }
`}</style>

    </div>
  );
}

export default MenuFilter;
