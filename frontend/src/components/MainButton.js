import React from 'react';

function MainButton({ color, text }) {
  const styels = {
    button: {
      backgroundColor: color,
      width: '228px',
      height: '46px',
      borderRadius: '5px',
      border: 'none',
      marginBottom: '10px',
      cursor: 'pointer',
      fontSize: '14px',
      color: '#fff',
      fontWeight: 'bold',
    },
  };

  return <button style={styels.button}>{text}</button>;
}

export default MainButton;
