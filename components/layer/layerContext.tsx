import React, { createContext, useContext } from 'react';

const LayerContext = createContext(null);

export const LayerProvider: React.FC<{ layer: any; children: React.ReactNode }> = ({ layer, children }) => {
    return <LayerContext.Provider value={layer}>{children}</LayerContext.Provider>;
};

// Step 3: Consume the context value
export const useLayer = () => {
  const layer = useContext(LayerContext);
  if (layer === null) {
    throw new Error('useLayer must be used within a LayerProvider');
  }
  return layer;
};
