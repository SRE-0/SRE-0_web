// App.tsx

import { useRef } from "react";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./core/theme/ThemeContext";
import Header     from "./core/components/layout/Header/Header";
import AppRouter  from "./core/router/AppRouter";
import Footer     from "./core/components/layout/Footer/Footer";
import ScrollToTop from "./core/components/ui/scroll/ScrollToTop";
import "./App.css";

/*
 * App
 * Root of the React tree.
 * mainRef is passed to ScrollToTop so it can reset the scroll
 * of the scrollable container instead of window.
 */
function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
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