import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "./core/theme/ThemeContext";
import Header from "./core/components/layout/Header/Header";
import AppRouter from "./core/router/AppRouter";
import Footer from "./core/components/layout/Footer/Footer";
import "./App.css";

//test
/**
 * App
 * Root of the React tree.
 * ThemeProvider must be the outermost wrapper so every component
 * can access the theme via useTheme().
 *
 * Layout strategy:
 * - The outer wrapper fills the full viewport height (min-h-screen)
 *   and uses a flex column so Header, main, and Footer stack vertically.
 * - main gets flex-grow so it expands to fill available space,
 *   pushing Footer to the bottom even when content is short.
 * - Header uses sticky positioning so it stays visible on scroll.
 */
function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="app-layout">
          <Header />
          <main className="app-main">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;