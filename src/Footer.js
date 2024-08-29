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
  padding: '10px',
  backgroundColor: '#076907',
 
  bottom: 0,
  width: '98%',
};

export default Footer;