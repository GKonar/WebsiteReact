import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleHook';

export const ThemeContext = createContext();

export function DarkThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}