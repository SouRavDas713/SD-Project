import React from 'react';

const Header = ({ onAdminClick }) => {
  return (
    <header style={styles.header}>
      <button onClick={onAdminClick} style={styles.adminBtn}>
        Admin
      </button>
      <div style={{ flexGrow: 1, textAlign: 'center' }}>
        <h1 style={styles.title}>IIUC Restaurant</h1>
        <p style={styles.tagline}>Delicious meals served fresh every day</p>
      </div>
      {/* QR code image */}
      <img
        src="/images/frame.png"
        alt="QR Code"
        style={styles.qrImage}
      />
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  adminBtn: {
    backgroundColor: '#222',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginRight: '20px',
  },
  title: {
    margin: '0',
    fontSize: '2.5rem',
  },
  tagline: {
    marginTop: '10px',
    fontSize: '1.2rem',
  },
  qrImage: {
    width: '150px',  // adjust size as needed
    height: '150px',
    marginLeft: '20px',
    marginRight:'120px'
  },
};

export default Header;
