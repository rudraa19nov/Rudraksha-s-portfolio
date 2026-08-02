import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('rsc-theme');
      return saved ? saved === 'dark' : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (dark) {
      // Dark mode: remove 'light' from both, no extra class needed (default vars are dark)
      html.classList.remove('light');
      body.classList.remove('light');
      html.setAttribute('data-theme', 'dark');
      body.setAttribute('data-theme', 'dark');
    } else {
      // Light mode: add 'light' class to both html and body
      html.classList.add('light');
      body.classList.add('light');
      html.setAttribute('data-theme', 'light');
      body.setAttribute('data-theme', 'light');
    }

    try {
      localStorage.setItem('rsc-theme', dark ? 'dark' : 'light');
    } catch {}
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);