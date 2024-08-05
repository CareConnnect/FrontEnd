import React, { useContext } from 'react';

import { UseContext } from '../provider/useContext';

function Button({ backgroundColor, color, text, size = 'large', mode }) {
  const context = useContext(UseContext);
  const { userMode, setUserMode } = context;
  const onHandleClick = () => {
    mode &&
      (mode === 'elderly' ? setUserMode('elderly') : setUserMode('family'));
  };

  const styels =
    size === 'large'
      ? {
          button: {
            backgroundColor: backgroundColor,
            width: '228px',
            height: '46px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px',
            cursor: 'pointer',
            fontSize: '14px',
            color: color,
            fontWeight: 'bold',
          },
        }
      : {
          button: {
            backgroundColor: backgroundColor,
            color: color,
            width: '131px',
            height: '35px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          },
        };

  return (
    <button style={styels.button} onClick={onHandleClick}>
      {text}
    </button>
  );
}

export default Button;
