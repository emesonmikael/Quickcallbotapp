import React from 'react';
import logo from './assets/logo.jpg'; // Caminho para o logo
import youtubeIcon from './assets/twitter-icon.jpg'; // Caminho para o ícone do YouTube
import telegramIcon from './assets/telegram-icon.png'; // Caminho para o ícone do Telegram
import twitterIcon from './assets/twitter-icon.jpg'; // Caminho para o ícone do Twitter

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img
          src={logo}
          alt="Logo"
          style={logoStyle}
        />
        <h1 style={nameStyle}>Nome do Projeto</h1>
      </div>
      <div style={iconContainerStyle}>
        <a href="https://youtube.com/@brasilfancryptos?si=2GBtq2vGvvHffeQo" target="_blank" rel="noopener noreferrer">
          <img
            src={youtubeIcon}
            alt="YouTube"
            style={iconStyle}
          />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <img
            src={telegramIcon}
            alt="Telegram"
            style={iconStyle}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src={twitterIcon}
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
  backgroundColor: '#076907',
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