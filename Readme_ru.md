# SyntaxLab

SyntaxLab - это двуязычный (English/Russian) сайт для изучения популярных языков программирования.

Проект сделан на **React + TypeScript + Vite** и включает:
- Современную главную страницу с карточками языков
- Переключение интерфейса EN/RU
- Подробные страницы языков: объяснения, темы, roadmap, гайды, частые ошибки, идеи проектов и примеры кода
- Каталог из 30+ популярных языков

## Технологии

- React 18
- TypeScript
- React Router DOM
- Vite

## Быстрый старт

### 1. Установить зависимости

```bash
npm install
```

### 2. Запустить dev-сервер

```bash
npm run dev
```

### 3. Собрать production-версию

```bash
npm run build
```

### 4. Просмотреть production-сборку

```bash
npm run preview
```

## Основные маршруты

- `/en` - главная страница на английском
- `/ru` - главная страница на русском
- `/en/languages/:slug` - страница языка на английском
- `/ru/languages/:slug` - страница языка на русском

## Структура проекта

```text
src/
  components/
    LanguageList.tsx
    LanguageSwitcher.tsx
  data/
    tutorials.ts
  pages/
    HomeEn.tsx
    HomeRu.tsx
    TutorialPage.tsx
  styles/
    global.css
    Page.module.css
    LanguageList.module.css
    LanguageSwitcher.module.css
  index.tsx
  router.tsx
```

## Модель контента

Все данные по языкам хранятся в `src/data/tutorials.ts`.
Для каждого языка есть локализованные поля EN/RU и секции, которые используются в интерфейсе (overview, use cases, roadmap, гайды, snippets и т.д.).

## Примечания

- В репозитории пока нет автоматических тестов.
- Папка `dist/` формируется Vite при сборке.
