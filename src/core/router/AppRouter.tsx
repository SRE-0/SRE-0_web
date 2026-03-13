import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes.constants";

import Home                  from "../../modules/home/pages/Home";
import { Coding }            from "../../modules/coding";
import { CodingDetail }      from "../../modules/coding";
import { Competencies }      from "../../modules/competencies";
import { CompetencyDetail }  from "../../modules/competencies";
import { Hobbies }           from "../../modules/hobbies";
import { About }             from "../../modules/about";

/**
 * AppRouter
 * Defines all available routes in the application.
 * Detail routes use :slug to serve any project dynamically —
 * no new route needed when adding a project, only a registry entry.
 */
function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME}                element={<Home />} />
      <Route path={ROUTES.CODING}              element={<Coding />} />
      <Route path={ROUTES.CODING_DETAIL}       element={<CodingDetail />} />
      <Route path={ROUTES.COMPETENCIES}        element={<Competencies />} />
      <Route path={ROUTES.COMPETENCIES_DETAIL} element={<CompetencyDetail />} />
      <Route path={ROUTES.HOBBIES}             element={<Hobbies />} />
      <Route path={ROUTES.ABOUT}               element={<About />} />
    </Routes>
  );
}

export default AppRouter;