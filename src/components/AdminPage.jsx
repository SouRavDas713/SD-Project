// src/components/AdminPage.jsx

import React from 'react';

const AdminPage = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <div style={{ padding: 20 }}>No orders yet.</div>;
  }

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h2>All Orders</h2>
      {orders.map((order, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 15,
            marginBottom: 20,
            backgroundColor: '#fafafa',
          }}
        >
          <h3>Customer: {order.customer.name}</h3>
          <p>
            <strong>Location:</strong> {order.customer.location} <br />
            <strong>Phone:</strong> {order.customer.phone}
          </p>
          <h4>Items:</h4>
          <ul>
            {order.cart.map((item) => {
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
            {order.cart.reduce((sum, item) => {
              const priceNumber = parseFloat(item.price.replace('$', ''));
              return sum + priceNumber * item.qty;
            }, 0)}৳
          </p>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
