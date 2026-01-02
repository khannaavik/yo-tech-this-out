import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Theme Context
 * Provides theme state and toggle functionality
 */
const ThemeContext = createContext();

/**
 * ThemeProvider Component
 * Manages theme state and applies theme to document
 */
export function ThemeProvider({ children }) {
  // Default theme is dark - safe for SSR
  const [theme, setTheme] = useState(() => {
    // Only access localStorage if window is available (client-side)
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || savedTheme === 'light') {
          return savedTheme;
        }
      } catch (e) {
        // localStorage might be disabled or unavailable
        console.warn('localStorage not available:', e);
      }
    }
    return 'dark';
  });

  useEffect(() => {
    // Only run on client-side
    if (typeof document !== 'undefined') {
      // Apply theme to document root
      document.documentElement.setAttribute('data-theme', theme);
      // Save theme preference to localStorage
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          localStorage.setItem('theme', theme);
        } catch (e) {
          // localStorage might be disabled
          console.warn('Could not save theme to localStorage:', e);
        }
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme Hook
 * Access theme context in components
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

