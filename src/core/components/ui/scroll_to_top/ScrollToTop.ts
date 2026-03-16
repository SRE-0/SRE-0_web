// core/components/ui/scroll/ScrollToTop.ts

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * ScrollToTop
 * Resets scroll position on every route change.
 * Targets document.documentElement and document.body to cover
 * all browsers and layout configurations including HashRouter.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;