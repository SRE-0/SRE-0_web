// Coding.tsx
import CodingView from "../components/coding_view/CodingView"
/*
  Coding Page

  This page renders the detailed information about the TeamPyros project.
  All textual content is loaded from the i18n JSON files using the
  translation hook, allowing the page to support multiple languages.

  Sections rendered:
  - Project header
  - About the team
  - Project origin
  - Robotic solution
  - System explanation
  - Team trajectory and awards
*/

export default function Coding() {

  return (
    <div>
      <CodingView/>
    </div>
  )
}