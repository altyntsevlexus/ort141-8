/**
 * Shared geometry for slide diagrams.
 *
 * Every diagram draws into the same 1000×420 viewBox so they all sit identically
 * in the slide frame and share one type scale. Colour comes from `currentColor`
 * and `var(--accent)`, which the slide sets from the course — so блок 1's
 * diagrams are blue and блок 2's will be green with no change here.
 */
export const VB = { w: 1000, h: 420 } as const;

export const TYPE = {
  /** Box label — the name of a thing. */
  label: 30,
  /** Supporting line under a label. */
  sub: 22,
  /** Small annotation on an arrow or bracket. */
  note: 20,
  /** Monospace URL / code fragments. */
  mono: 26,
} as const;

/**
 * The one non-accent colour. Marks the thing that is going wrong: a blocked
 * connection, a payload, a verdict of "fake". Not themed per course — danger
 * reads the same in every block.
 */
export const WARN = '#C2551F';
