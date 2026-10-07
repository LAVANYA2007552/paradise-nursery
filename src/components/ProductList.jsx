import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import '../App.css';

const ProductList = () => {
  const [showCart, setShowCart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const dispatch = useDispatch();

  // Select cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total items count for navbar badge
  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Check if a product is already in the cart to disable the "Add to Cart" button
  const isAddedToCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    setShowAbout(false);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
    setShowAbout(false);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setShowAbout(true);
    setShowCart(false);
  };

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          id: 'ap1',
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night and improves air quality.',
          cost: '$15',
        },
        {
          id: 'ap2',
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from indoor air.',
          cost: '$12',
        },
        {
          id: 'ap3',
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg',
          description: 'Removes mold spores and purifies indoor air.',
          cost: '$18',
        },
        {
          id: 'ap4',
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity and filters harmful air pollutants.',
          cost: '$14',
        },
        {
          id: 'ap5',
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Easy-to-grow air purifier with striking broad leaves.',
          cost: '$20',
        },
        {
          id: 'ap6',
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/18/08/aloe-vera-3284620_1280.jpg',
          description: 'Purifies air and offers soothing gel for burns.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          id: 'ar1',
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=800&auto=format&fit=crop',
          description: 'Calming fragrance that reduces stress and anxiety.',
          cost: '$20',
        },
        {
          id: 'ar2',
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729800077-ac5542f01f0c?q=80&w=800&auto=format&fit=crop',
          description: 'Sweet floral scent that promotes relaxation and sleep.',
          cost: '$18',
        },
        {
          id: 'ar3',
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/04/rosemary-4541241_1280.jpg',
          description: 'Invigorating herbal scent that enhances focus.',
          cost: '$15',
        },
        {
          id: 'ar4',
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/27/07/02/mint-1163933_1280.jpg',
          description: 'Fresh aromatic leaves ideal for teas and cooking.',
          cost: '$10',
        },
        {
          id: 'ar5',
          name: 'Eucalyptus',
          image: 'https://cdn.pixabay.com/photo/2016/11/29/05/07/eucalyptus-1867471_1280.jpg',
          description: 'Refreshing menthol aroma that opens airways.',
          cost: '$22',
        },
        {
          id: 'ar6',
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2017/05/18/06/17/lemon-balm-2322617_1280.jpg',
          description: 'Citrusy scent that boosts mood and relieves stress.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Low Maintenance Succulents',
      plants: [
        {
          id: 'lm1',
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=800&auto=format&fit=crop',
          description: 'Thrives in low light and requires minimal watering.',
          cost: '$25',
        },
        {
          id: 'lm2',
          name: 'Pothos',
          image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816940_1280.jpg',
          description: 'Extremely resilient vining plant for any room.',
          cost: '$14',
        },
        {
          id: 'lm3',
          name: 'Cast Iron Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/29/14/41/aspidistra-5961234_1280.jpg',
          description: 'Tolerates neglect, low light, and temperature changes.',
          cost: '$22',
        },
        {
          id: 'lm4',
          name: 'Jade Plant',
          image: 'https://cdn.pixabay.com/photo/2016/03/09/09/30/jade-plant-1245842_1280.jpg',
          description: 'Classic succulent symbol of good luck and prosperity.',
          cost: '$16',
        },
        {
          id: 'lm5',
          name: 'Haworthia',
          image: 'https://cdn.pixabay.com/photo/2020/07/22/08/38/haworthia-5428481_1280.jpg',
          description: 'Compact striped succulent perfect for desk spaces.',
          cost: '$11',
        },
        {
          id: 'lm6',
          name: 'Echeveria',
          image: 'https://cdn.pixabay.com/photo/2016/09/09/12/03/succulent-1656911_1280.jpg',
          description: 'Beautiful rosette-shaped succulent requiring minimal care.',
          cost: '$9',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Reusable Navbar */}
      <nav className="navbar" style={{ backgroundColor: '#2e7d32', color: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={handlePlantsClick}>
          <h2 style={{ margin: 0 }}>Paradise Nursery</h2>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#" onClick={handlePlantsClick} style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            Home / Plants
          </a>
          <a href="#" onClick={handleAboutClick} style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            About Us
          </a>
          <a href="#" onClick={handleCartClick} style={{ color: '#fff', textDecoration: 'none', position: 'relative', display: 'flex', alignItems: 'center' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count
