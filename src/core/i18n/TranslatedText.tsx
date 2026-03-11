import { Fragment } from "react"
import { CustomTextLink } from "../components/ui/custom_text_link/CustomTextLink"

/*
  Represents a link that can be embedded inside a translated paragraph.
  - key: the placeholder token used in the translation string, e.g. "githubLink"
  - text: the visible label for the link
  - href: the destination URL
*/
export type EmbeddedLink = {
  key: string
  text: string
  href: string
}

/*
  Props for TranslatedText.
  - text: the full translated string, which may contain link placeholders
          in the format {{linkKey}} e.g. "Visit {{githubLink}} for more."
  - links: array of EmbeddedLink objects whose keys match the placeholders
  - className: optional CSS class for the wrapping <p> tag
*/
type TranslatedTextProps = {
  text: string
  links?: EmbeddedLink[]
  className?: string
}

/*
  TranslatedText renders a paragraph that supports embedded CustomTextLink
  components at arbitrary positions within a translated string.

  How it works:
  1. The translation string uses {{linkKey}} as a placeholder token.
  2. TranslatedText splits the string by all known {{linkKey}} tokens.
  3. Each segment is either plain text or a link placeholder.
  4. Link placeholders are replaced with <CustomTextLink> components.

  Example translation string:
    "Feel free to explore my work on {{githubLink}}, or take a look around."

  Example usage:
    <TranslatedText
      text={t("home.intro")}
      links={[
        { key: "githubLink", text: "GitHub", href: "https://github.com/..." }
      ]}
    />
*/
export function TranslatedText({
  text,
  links = [],
  className,
}: TranslatedTextProps) {

  // If no links are provided, render as plain paragraph
  if (links.length === 0) {
    return <p className={className}>{text}</p>
  }

  // Build a regex that matches any of the known {{linkKey}} placeholders
  // e.g. /(\{\{githubLink\}\}|\{\{appsLink\}\})/g
  const placeholderPattern = links
    .map((link) => `\\{\\{${link.key}\\}\\}`)
    .join("|")

  const splitRegex = new RegExp(`(${placeholderPattern})`, "g")

  // Split text into segments: plain strings and placeholder tokens
  const segments = text.split(splitRegex)

  return (
    <p className={className}>
      {segments.map((segment, index) => {
        // Check if this segment matches a known link placeholder
        const matchedLink = links.find(
          (link) => segment === `{{${link.key}}}`
        )

        if (matchedLink) {
          return (
            <CustomTextLink
              key={`${matchedLink.key}-${index}`}
              text={matchedLink.text}
              addressLink={matchedLink.href}
            />
          )
        }

        // Plain text segment — render as-is
        return <Fragment key={index}>{segment}</Fragment>
      })}
    </p>
  )
}