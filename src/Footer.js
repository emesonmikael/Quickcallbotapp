import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Nome do Projeto. Todos os direitos reservados.</p>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f8f9fa',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;