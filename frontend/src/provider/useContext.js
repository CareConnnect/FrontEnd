import React, { createContext } from 'react';

const initValue = {
  userMode: '',
};

export const UseContext = createContext(initValue);

export function ContextProvider(props) {
  const [userMode, setUserMode] = React.useState('');
  const contextValue = {
    userMode,
    setUserMode,
  };

  return (
    <UseContext.Provider value={contextValue}>
      {props.children}
    </UseContext.Provider>
  );
}
