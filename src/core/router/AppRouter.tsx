import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes.constants";

// Pages - each module exposes its page through its index.ts
import Home              from "../../modules/home/pages/Home";
import { Coding }        from "../../modules/coding";   
import { Competencies }  from "../../modules/competencies";
import { Hobbies }       from "../../modules/hobbies";
import { About }         from "../../modules/about";

/**
 * AppRouter
 * Defines all available routes in the application.
 */
function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME}                element={<Home />} />
      <Route path={ROUTES.CODING}              element={<Coding />} />
      <Route path={ROUTES.COMPETENCIES}        element={<Competencies />} />
      <Route path={ROUTES.HOBBIES}             element={<Hobbies />} />
      <Route path={ROUTES.ABOUT}               element={<About />} />
    </Routes>
  );
}

export default AppRouter;