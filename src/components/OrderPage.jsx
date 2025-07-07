// src/components/OrderPage.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderPage = ({ addOrder }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const [form, setForm] = useState({
    name: '',
    location: '',
    phone: '',
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.location.trim() || !form.phone.trim()) {
      alert('Please fill all the fields.');
      return;
    }

    const orderData = {
      customer: form,
      cart,
    };

    addOrder(orderData);  // Save order to App state
    setOrderConfirmed(true);
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Your cart is empty.</h2>
        <button onClick={() => navigate('/')}>Go Back to Home</button>
      </div>
    );
  }

  if (orderConfirmed) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Thank you, {form.name}! Your order has been confirmed.</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Order Summary</h2>
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

      <h3>Enter your details</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: 8 }}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: 8 }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: 8 }}
        />
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default OrderPage;
