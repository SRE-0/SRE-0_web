// src/components/RichText/RichText.tsx

import React from "react";
import { CustomTextLink } from "../custom_text_link/CustomTextLink";
import type { RichTextSegment } from "../../../types/i18n.types";

type RichTextProps = {
  /** Array of segments (plain text or links) to render inline */
  segments: RichTextSegment[];
  /** Optional CSS class applied to the wrapping <p> tag */
  className?: string;
};

/**
 * Renders a paragraph composed of mixed plain text and inline links.
 * Accepts an array of RichTextSegment objects — each is either
 * a plain { type: "text", value } or a link { type: "link", text, href }.
 *
 * Handles "\n\n" in text segments as paragraph breaks.
 */
export function RichText({ segments, className }: RichTextProps) {
  return (
    <>
      {segments.map((segment, index) => {
        if (segment.type === "link") {
          return (
            <CustomTextLink
              key={index}
              text={segment.text}
              addressLink={segment.href}
            />
          );
        }

        // Split by double newline to support paragraph breaks inside a segment
        const paragraphs = segment.value.split("\n\n");

        return paragraphs.map((paragraph, pIndex) => (
          <React.Fragment key={`${index}-${pIndex}`}>
            {pIndex > 0 && (
              // Render a new paragraph block between sections
              <><br /><br /></>
            )}
            <span className={className}>{paragraph}</span>
          </React.Fragment>
        ));
      })}
    </>
  );
}