import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** The three ways a Тема presents itself. See CONTEXT.md. */
export const KINDS = ['Конспект', 'PDF', 'Презентація'] as const;

const courses = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    glyph: z.string(),
    /** Shown top-right on the card banner, e.g. "тижні 1–3". */
    span: z.string(),
    /** Shown in the card's meta line next to the theme count, e.g. "6 уроків". */
    load: z.string(),
    /** Accent and its pale wash. Converted from the design's oklch() pairs. */
    color: z.string(),
    tint: z.string(),
    order: z.number(),
  }),
});

/**
 * A slide is a visual with a headline. The lesson's content is what the teacher
 * says, not what the slide reads out — so a slide carries a kicker, a title, an
 * optional visual, and at most one sentence saying what the visual means.
 * See CONTEXT.md on Презентація.
 */
const visual = z.discriminatedUnion('type', [
  /** A named SVG diagram from src/components/diagrams. */
  z.object({ type: z.literal('diagram'), name: z.string() }),
  /** Used when the table IS the point: a comparison or a classification. */
  z.object({
    type: z.literal('table'),
    head: z.array(z.string()),
    rows: z.array(z.array(z.string())),
    /** Hides the answer column until clicked — for class-facing exercises. */
    reveal: z.boolean().optional(),
  }),
  z.object({ type: z.literal('code'), text: z.string() }),
  z.object({ type: z.literal('image'), src: z.string(), alt: z.string() }),
]);

const slide = z.object({
  kicker: z.string(),
  title: z.string(),
  visual: visual.optional(),
  /**
   * One sentence at the foot of the slide, saying what the visual means. Not a
   * restatement of the title, and not a list — the length cap is the whole
   * point of the field. Optional: most slides do not need one.
   */
  idea: z.string().max(220).optional(),
  /** Where to read more. Shown at the foot of the slide, in place of the idea. */
  links: z
    .array(z.object({ label: z.string(), href: z.string().url() }))
    .max(3)
    .optional(),
});

const themes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/themes' }),
  schema: z.object({
    title: z.string(),
    course: reference('courses'),
    kind: z.enum(KINDS),
    /** Short line under the title on the timeline, e.g. "Конспект · 25 хв". */
    meta: z.string(),
    order: z.number(),
    /** Marks a Тема whose material does not exist yet. */
    pending: z.boolean().optional(),
    /** Конспект only: the «Зміст теми» outline. Anchors must match section ids. */
    outline: z
      .array(z.object({ id: z.string(), label: z.string() }))
      .optional(),
    /** Конспект only: shown under the outline. */
    duration: z.string().optional(),
    /** Конспект only: lead paragraph above the first section. */
    lead: z.string().optional(),
    /** PDF only: filename within public/pdf/, plus display metadata. */
    pdf: z
      .object({ file: z.string(), pages: z.number() })
      .optional(),
    /** Презентація only. */
    slides: z.array(slide).optional(),
    /** Where the material comes from — textbook sections, decks, external links. */
    sources: z
      .array(
        z.object({
          label: z.string(),
          note: z.string().optional(),
          href: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { courses, themes };
