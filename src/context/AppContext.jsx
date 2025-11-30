import React, { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  isLoading: false,
  theme: 'dark',
  mobileMenuOpen: false,
  user: null,
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, mobileMenuOpen: !state.mobileMenuOpen };
    case 'SET_MOBILE_MENU':
      return { ...state, mobileMenuOpen: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'CONNECT_WALLET':
      return {
        ...state,
        user: state.user ? { ...state.user, walletConnected: true } : null,
      };
    case 'DISCONNECT_WALLET':
      return {
        ...state,
        user: state.user ? { ...state.user, walletConnected: false } : null,
      };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext(undefined);

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Helper functions
  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  const toggleMobileMenu = () => {
    dispatch({ type: 'TOGGLE_MOBILE_MENU' });
  };

  const setMobileMenu = (open) => {
    dispatch({ type: 'SET_MOBILE_MENU', payload: open });
  };

  const connectWallet = () => {
    dispatch({ type: 'CONNECT_WALLET' });
  };

  const disconnectWallet = () => {
    dispatch({ type: 'DISCONNECT_WALLET' });
  };

  const contextValue = {
    state,
    dispatch,
    setLoading,
    setTheme,
    toggleMobileMenu,
    setMobileMenu,
    connectWallet,
    disconnectWallet,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the app context
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
