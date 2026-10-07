import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#2e7d32', fontSize: '2.5rem', marginBottom: '1rem' }}>About Paradise Nursery</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
        Welcome to <strong>Paradise Nursery</strong>, your premier online destination for top-quality houseplants! 
        Our mission is to bring nature closer to your everyday living spaces by offering a curated selection 
        of vibrant, healthy, and easy-to-care-for plants.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', marginBottom: '1.5rem' }}>
        Whether you are looking for air-purifying foliage to refresh your indoor office space, aromatic herbs to brighten 
        your kitchen, or resilient succulent varieties that require minimal maintenance, Paradise Nursery has something 
        for plant lovers of all experience levels.
      </p>
      <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#2e7d32' }}>
        Transform your home into a green oasis with Paradise Nursery today!
      </p>
    </div>
  );
};

export default AboutUs;
