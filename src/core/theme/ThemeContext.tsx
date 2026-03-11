import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Theme } from "./theme.types";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Key used to persist the theme selection in localStorage */
const STORAGE_KEY = "app-theme";

/** Cycle order for the toggle button */
const THEME_CYCLE: Theme[] = ["auto", "light", "dark"];

// ---------------------------------------------------------------------------
// Context shape
// ---------------------------------------------------------------------------

interface ThemeContextValue {
  /** Current active theme selection */
  theme: Theme;
  /** Advance to the next theme in the cycle: auto → light → dark → auto */
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

/**
 * ThemeProvider
 * Wraps the app and provides theme state to all children.
 * Persists the selection to localStorage and applies the correct
 * data-theme attribute to <html> so CSS variables switch automatically.
 *
 * Usage: wrap your App or BrowserRouter with <ThemeProvider>
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Restore persisted preference, default to "auto"
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return stored ?? "auto";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "auto") {
      // Remove attribute so :root + @media prefers-color-scheme takes over
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  /** Advance to the next theme in the cycle */
  const cycleTheme = () => {
    setTheme((current) => {
      const currentIndex = THEME_CYCLE.indexOf(current);
      return THEME_CYCLE[(currentIndex + 1) % THEME_CYCLE.length];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * useTheme hook.
 * Provides access to the current theme and the cycleTheme function.
 * Must be used inside a ThemeProvider, otherwise throws an error.
 *
 * Usage:
 *   const { theme, cycleTheme } = useTheme();
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
}