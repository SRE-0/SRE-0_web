import Styles from "./CustomTextLink.module.css"

/*
  Props definition for the CustomTextLink component.
  Renders an anchor tag with an animated underline that expands
  left-to-right on hover.
*/
type TextLinkProps = {
  text: string
  addressLink: string
}

export function CustomTextLink
  ({ text, addressLink }: 
  TextLinkProps) {
  return (
    <span className={Styles.customWrapper}>
      <a      
        href={addressLink} 
        className={Styles.customTextLink} 
        target="_blank" 
        rel="noopener noreferrer">
        {text}
      </a>
    </span>
    
  )
}