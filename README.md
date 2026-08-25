# 8-й клас Інформатика ОРТ

Сайт із матеріалами курсу. Публічний, без реєстрації.

**Live:** https://altyntsevlexus.github.io/ort141-8/

## Локальний запуск

```sh
npm install
npm run dev
```

`npm run build` збирає у `dist/`, `npm run check` перевіряє типи.

## Структура

```
src/content/courses/<course>.json      метадані курсу (назва, колір, глиф)
src/content/themes/<course>/<slug>.mdx одна тема
src/components/                        компоненти для конспектів + вʼюери
public/pdf/                            файли PDF
```

Кожна тема має один `kind`: `Конспект`, `PDF` або `Презентація`. Kind не входить
в URL — усі три є способами показати одну адресу `/courses/<course>/<theme>/`.

## Як додати тему

Створіть `src/content/themes/<course>/<slug>.mdx`. Обовʼязкові поля frontmatter:
`title`, `course`, `kind`, `meta`, `order`.

Для конспекту додайте `outline`, `duration`, `lead` і використовуйте компоненти —
вони доступні без імпорту: `Section`, `Syntax`, `CodeBlock`, `Callout`, `Steps`,
`Practice`, `Keys`, `Screenshot`. Приклад:
[`excel/references.mdx`](src/content/themes/excel/references.mdx).

Для PDF додайте `pdf: { file, pages }` і покладіть файл у `public/pdf/`.
Для презентації — масив `slides` із `kicker`, `title`, `bullets`.

## Документація

- [`CONTEXT.md`](CONTEXT.md) — глосарій: що таке Курс, Тема, Kind
- [`docs/adr/`](docs/adr/) — рішення, які важко відкотити

Матеріали для викладання (плани, підручник, таблиці) — поза цим репозиторієм,
у `2026-2027/`. Див. [ADR 0002](docs/adr/0002-teaching-material-outside-the-repo.md).

## Статус

Структура готова, контент — заготовки. Реальний матеріал є лише в темі
«Абсолютні та відносні посилання» (зразок для решти).

Чотири курси на головній — **placeholder із прототипу** (Excel, Python, Figma,
веб-розробка). Їх треба замінити на реальні блоки курсу, коли план буде готовий.
