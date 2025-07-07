import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import MenuFilter from './components/MenuFilter';
import FoodList from './components/FoodList';
import Footer from './components/Footer';
import Header from './components/Header';
import foodData from './data/foodData';

import OrderPage from './components/OrderPage';
import AdminPage from './components/AdminPage';

import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Save orders to localStorage when orders change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleAdminClick = () => {
    const code = window.prompt('Enter Admin Secret Code:');
    if (code === '1234') {
      navigate('/admin');
    } else {
      alert('Wrong code! Access denied.');
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, qty: 1 }];
      }
    });
  };

  const handleQtyChange = (itemId, action) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId
            ? {
                ...item,
                qty: action === 'inc' ? item.qty + 1 : item.qty - 1,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const filteredFood =
    selectedCategory === 'All'
      ? foodData
      : foodData.filter((item) => item.category === selectedCategory);

  if (!mounted) return null;

  const goToOrderPage = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/order', { state: { cart } });
  };

  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <>
      <Header onAdminClick={handleAdminClick} />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main-content">
              <MenuFilter
                onCategoryChange={handleCategoryChange}
                categories={['All', 'Breakfast', 'Lunch', 'Dinner']}
              />
              <FoodList
                foods={filteredFood}
                onAddToCart={handleAddToCart}
                cart={cart}
                onQtyChange={handleQtyChange}
              />

              {cart.length > 0 && (
                <div className="cart-summary">
                  <h2>🛒 Your Cart</h2>
                  <ul>
                    {cart.map((item) => {
                      const priceNumber = parseFloat(item.price.replace('$', ''));
                      return (
                        <li key={item.id}>
                          {item.name} x {item.qty} = {priceNumber * item.qty}৳
                        </li>
                      );
                    })}
                  </ul>
                  <p>
                    <strong>Total:</strong>{' '}
                    {cart.reduce((sum, item) => {
                      const priceNumber = parseFloat(item.price.replace('$', ''));
                      return sum + priceNumber * item.qty;
                    }, 0)}৳
                  </p>

                  <button onClick={goToOrderPage}>Confirm Your Order</button>
                </div>
              )}
            </main>
          }
        />
        <Route path="/order" element={<OrderPage addOrder={addOrder} />} />
        <Route path="/admin" element={<AdminPage orders={orders} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
