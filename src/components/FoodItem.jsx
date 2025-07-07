import React from 'react';

const FoodItem = ({ item, onAddToCart, inCart, onQtyChange }) => {
  return (
    <div className="food-item">
      <img src={item.image} alt={item.name} className="food-image" />
      <h3 className="food-name">{item.name}</h3>
      <p className="food-category">{item.category}</p>
      <p className="food-price">{item.price}৳</p>

      {!inCart ? (
        <button onClick={() => onAddToCart(item)}>Add to Cart</button>
      ) : (
        <div className="qty-controls">
          <button onClick={() => onQtyChange(item.id, 'dec')}>-</button>
          <span>{inCart.qty}</span>
          <button onClick={() => onQtyChange(item.id, 'inc')}>+</button>
        </div>
      )}
    </div>
  );
};

export default FoodItem;
