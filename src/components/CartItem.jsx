import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import '../App.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper function to parse numerical value from price string (e.g. "$15" -> 15)
  const parseCost = (costString) => {
    return parseFloat(costString.replace('$', '')) || 0;
  };

  // Calculate total price for all items in the cart
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  // Calculate total item count across all cart items
  const calculateTotalCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate subtotal for a specific item
  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleCheckoutShopping = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-container" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32', marginBottom: '1.5rem' }}>Your Shopping Cart</h2>

      <div style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
        <p>Total Cart Items: {calculateTotalCount()}</p>
        <p style={{ color: '#2e7d32', fontSize: '1.4rem', marginTop: '0.5rem' }}>
          Total Cart Amount: ${calculateTotalAmount()}
        </p>
      </div>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Your cart is currently empty.</p>
          <button
            onClick={onContinueShopping}
            style={{
              backgroundColor: '#2e7d32',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '1rem',
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-items-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {cart.map((item) => (
              <div
                key={item.id}
                className="cart-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  padding: '1rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div style={{ flex: 1, marginLeft: '1.5rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#1b5e20' }}>{item.name}</h3>
                  <p style={{ margin: '0 0 0.25rem 0', color: '#555' }}>Unit Price: {item.cost}</p>
                  <p style={{ margin: '0', fontWeight: 'bold', color: '#2e7d32' }}>
                    Subtotal: ${calculateTotalCost(item)}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => handleDecrement(item)}
                    style={{
                      backgroundColor: '#e0e0e0',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item)}
                    style={{
                      backgroundColor: '#e0e0e0',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item)}
                    style={{
                      backgroundColor: '#d32f2f',
                      color: '#fff',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      marginLeft: '15px',
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
