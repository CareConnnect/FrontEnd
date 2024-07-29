import React, { createContext } from 'react';

const initValue = {};

export const UseContext = createContext(initValue);

export function ContextProvider(props) {
  const contextValue = {};

  return (
    <UseContext.Provider value={contextValue}>
      {props.children}
    </UseContext.Provider>
  );
}
