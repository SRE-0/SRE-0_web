import * as React from "react"

// Custom props extending the native SVG props
interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
  color?: string  // Custom fill color, defaults to #6750A4
}

/**
 * SvgComponent
 * Renders a decorative wave/chain SVG illustration.
 *
 * @param color - Fill color for all paths. Defaults to "#6750A4"
 * @param props - Any standard SVG attribute (width, height, className, style, etc.)
 */
const SvgComponent = ({ color = "#6750A4", ...props }: SvgComponentProps): React.ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={244}
    height={12}
    fill="none"
    {...props}
  >
    <path fill={color} d="M3.03 4.285A2 2 0 0 0 .97 7.715l2.058-3.43Zm17.941 0a17.436 17.436 0 0 1-17.942 0L.971 7.715a21.437 21.437 0 0 0 22.058 0l-2.058-3.43Zm2.058 3.43a17.437 17.437 0 0 1 17.942 0l2.058-3.43a21.437 21.437 0 0 0-22.058 0l2.058 3.43Z" />
    <path fill={color} d="M80.971 7.715a2 2 0 0 0 2.058-3.43l-2.058 3.43Zm-17.942 0a17.436 17.436 0 0 1 17.942 0l2.058-3.43a21.437 21.437 0 0 0-22.058 0l2.058 3.43Zm-2.058-3.43a17.437 17.437 0 0 1-17.942 0l-2.058 3.43a21.437 21.437 0 0 0 22.058 0l-2.058-3.43Z" />
    <path fill={color} d="M120.971 7.715a2 2 0 1 0 2.058-3.43l-2.058 3.43Zm-17.942 0a17.436 17.436 0 0 1 17.942 0l2.058-3.43a21.437 21.437 0 0 0-22.058 0l2.058 3.43Zm-2.058-3.43a17.436 17.436 0 0 1-17.942 0l-2.058 3.43a21.436 21.436 0 0 0 22.058 0l-2.058-3.43Z" />
    <path fill={color} d="M160.971 7.715a2 2 0 1 0 2.058-3.43l-2.058 3.43Zm-17.942 0a17.436 17.436 0 0 1 17.942 0l2.058-3.43a21.437 21.437 0 0 0-22.058 0l2.058 3.43Zm-2.058-3.43a17.437 17.437 0 0 1-17.942 0l-2.058 3.43a21.437 21.437 0 0 0 22.058 0l-2.058-3.43Z" />
    <path fill={color} d="M200.971 7.715a2 2 0 1 0 2.058-3.43l-2.058 3.43Zm-17.942 0a17.436 17.436 0 0 1 17.942 0l2.058-3.43a21.437 21.437 0 0 0-22.058 0l2.058 3.43Zm-2.058-3.43a17.437 17.437 0 0 1-17.942 0l-2.058 3.43a21.437 21.437 0 0 0 22.058 0l-2.058-3.43Z" />
    <path fill={color} d="M240.971 7.715a2 2 0 1 0 2.058-3.43l-2.058 3.43Zm-17.942 0a17.436 17.436 0 0 1 17.942 0l2.058-3.43a21.437 21.437 0 0 0-22.058 0l2.058 3.43Zm-2.058-3.43a17.437 17.437 0 0 1-17.942 0l-2.058 3.43a21.437 21.437 0 0 0 22.058 0l-2.058-3.43Z" />
  </svg>
)

export default SvgComponent