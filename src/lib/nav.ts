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

/**
 * «1 тема», «4 теми», «6 тем» — the card meta line reads as a sentence, so the
 * count has to agree with it. Ukrainian picks the form by the last digit, except
 * in the teens, where every number takes the genitive plural.
 */
export function themeCount(n: number) {
  const last = n % 10;
  const teens = n % 100 >= 11 && n % 100 <= 14;
  if (!teens && last === 1) return `${n} тема`;
  if (!teens && last >= 2 && last <= 4) return `${n} теми`;
  return `${n} тем`;
}

/**
 * «Зараз вивчаємо» — the Теми the class is working on right now. A Курс is
 * marked current when it holds at least one of them; the label belongs to the
 * material, so the course only reflects what its themes say.
 */
export const isCurrent = (theme: Theme) => theme.data.current === true;

export const hasCurrent = (themes: Theme[]) => themes.some(isCurrent);

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
