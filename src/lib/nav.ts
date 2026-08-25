import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Course = CollectionEntry<'courses'>;
export type Theme = CollectionEntry<'themes'>;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const homeUrl = `${base}/`;
export const courseUrl = (courseId: string) => `${base}/courses/${courseId}/`;
export const themeUrl = (courseId: string, themeId: string) =>
  `${base}/courses/${courseId}/${themeId}/`;

/** A theme's id is "<course>/<slug>"; the URL only carries the slug. */
export const themeSlug = (theme: Theme) => theme.id.split('/').pop()!;

export const allCourses = async () =>
  (await getCollection('courses')).sort((a, b) => a.data.order - b.data.order);

export const themesOf = async (courseId: string) =>
  (await getCollection('themes', (t) => t.data.course.id === courseId)).sort(
    (a, b) => a.data.order - b.data.order,
  );

export const courseOf = async (theme: Theme) => {
  const course = await getEntry(theme.data.course);
  if (!course) throw new Error(`Unknown course: ${theme.data.course.id}`);
  return course;
};

/**
 * Prev/next within a course. Crosses kinds freely, but does NOT wrap: the first
 * theme has no previous and the last has no next. The prototype wrapped via
 * modulo, which silently sent a reader at theme 1 to the end of the course.
 */
export async function stepper(course: Course, theme: Theme) {
  const themes = await themesOf(course.id);
  const i = themes.findIndex((t) => t.id === theme.id);
  if (i === -1) return null;
  return {
    index: i,
    prev: i > 0 ? themes[i - 1] : null,
    next: i < themes.length - 1 ? themes[i + 1] : null,
  };
}
