// src/types/i18n.types.ts

/**
 * Represents a plain text segment within a rich text block.
 */
export type PlainSegment = {
  type: "text";
  value: string;
};

/**
 * Represents a linked text segment within a rich text block.
 * @param text - The visible label of the link
 * @param href - The URL the link points to
 */
export type LinkSegment = {
  type: "link";
  text: string;
  href: string;
};

/**
 * A segment is either plain text or a link.
 * Used to build rich paragraphs with inline links.
 */
export type RichTextSegment = PlainSegment | LinkSegment;