import React from 'react';
import FoodItem from './FoodItem';

const FoodList = ({ foods, onAddToCart, cart, onQtyChange }) => {
  if (foods.length === 0) {
    return <p className="no-food-message">No food items found.</p>;
  }

  return (
    <div className="food-grid">
      {foods.map((food) => {
        const inCart = cart.find((c) => c.id === food.id);
        return (
          <FoodItem
            key={food.id}
            item={food}
            onAddToCart={onAddToCart}
            inCart={inCart}
            onQtyChange={onQtyChange}
          />
        );
      })}
    </div>
  );
};

export default FoodList;
