// src/components/Navbar.jsx

import React from 'react';

const Navbar = ({ selectedCategory, onSelectCategory }) => {
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

  return (
    <nav style={styles.nav}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          style={{
            ...styles.button,
            backgroundColor: selectedCategory === category ? '#f44336' : '#fff',
            color: selectedCategory === category ? '#fff' : '#000'
          }}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

const styles = {
  nav: {
    textAlign: 'center',
    margin: '20px 0'
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    border: '2px solid #f44336',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem'
  }
};

export default Navbar;
