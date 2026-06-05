import { createContext, useContext } from 'react';
export const StoreContext = createContext({ getStoreName: () => 'JEANCOL', settings: {}, isLoading: false });
export const useStore = () => useContext(StoreContext);
