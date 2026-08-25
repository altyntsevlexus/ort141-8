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
    /** Holdover from the original design: identical on every card, since the
     *  whole site is one grade. Kept for fidelity to the prototype. */
    level: z.string(),
    hours: z.string(),
    /** Accent and its pale wash. Converted from the design's oklch() pairs. */
    color: z.string(),
    tint: z.string(),
    order: z.number(),
  }),
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
    slides: z
      .array(
        z.object({
          kicker: z.string(),
          title: z.string(),
          bullets: z.array(z.string()),
        }),
      )
      .optional(),
  }),
});

export const collections = { courses, themes };
