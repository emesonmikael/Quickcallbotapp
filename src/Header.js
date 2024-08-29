import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img
          src="Ahttps://photos.app.goo.gl/NC8iNh83xRXwmuhF6"
          alt="Logo"
          style={logoStyle}
        />
        <h1 style={nameStyle}>BFC QUICK CALL BOT</h1>
      </div>
      <div style={iconContainerStyle}>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://via.placeholder.com/30?text=YT"
            alt="YouTube"
            style={iconStyle}
          />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <img
            src="https://via.placeholder.com/30?text=TG"
            alt="Telegram"
            style={iconStyle}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://via.placeholder.com/30?text=TW"
            alt="Twitter"
            style={iconStyle}
          />
        </a>
      </div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: ' #076907',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  width: '50px',
  height: '50px',
  marginRight: '10px',
};

const nameStyle = {
  margin: 0,
  fontSize: '24px',
};

const iconContainerStyle = {
  display: 'flex',
  gap: '15px',
};

const iconStyle = {
  width: '30px',
  height: '30px',
};

export default Header;