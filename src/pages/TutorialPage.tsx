import { Link, useParams } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { getTutorial } from '../data/tutorials';
import type { Locale } from '../data/tutorials';
import styles from '../styles/Page.module.css';

type Props = {
  locale: Locale;
};

const TutorialPage = ({ locale }: Props): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const tutorial = slug ? getTutorial(locale, slug) : undefined;
  const homePath = locale === 'en' ? '/en' : '/ru';

  if (!tutorial) {
    return (
      <main className={styles.page}>
        <div className={styles.noise} aria-hidden="true" />
        <section className={styles.hero}>
          <LanguageSwitcher locale={locale} />
          <h1>{locale === 'en' ? 'Tutorial not found' : 'Урок не найден'}</h1>
          <p>
            {locale === 'en'
              ? 'This language track is missing or has not been added yet.'
              : 'Этот трек пока отсутствует или еще не добавлен.'}
          </p>
          <Link className={styles.back} to={homePath}>
            {locale === 'en' ? 'Back to language list' : 'Вернуться к списку языков'}
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.noise} aria-hidden="true" />
      <Link className={styles.back} to={homePath}>
        {locale === 'en' ? '← Back to all languages' : '← Назад ко всем языкам'}
      </Link>

      <section className={styles.lessonHero}>
        <LanguageSwitcher locale={locale} slug={tutorial.slug} />
        <div className={styles.lessonTop}>
          <span className={styles.lessonBadge} style={{ background: tutorial.gradient }}>
            {tutorial.icon}
          </span>
          <div>
            <h1>{tutorial.title}</h1>
            <p>{tutorial.overview}</p>
          </div>
        </div>
        <div className={styles.stats}>
          <span>{tutorial.category}</span>
          <span>{tutorial.difficulty}</span>
          <span>
            {locale === 'en' ? 'Popularity' : 'Популярность'}: {tutorial.popularity}
          </span>
        </div>
      </section>

      <section className={styles.lessonGrid}>
        <article className={styles.lessonCard}>
          <h2>{locale === 'en' ? 'Best Use Cases' : 'Где используется'}</h2>
          <ul>
            {tutorial.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.lessonCard}>
          <h2>{locale === 'en' ? 'Learning Steps' : 'Первые шаги'}</h2>
          <ol>
            {tutorial.firstSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className={styles.longSection}>
        <h2>{locale === 'en' ? 'Detailed Explanation' : 'Подробное объяснение'}</h2>
        {tutorial.deepDive.map((paragraph) => (
          <p key={paragraph} className={styles.prose}>
            {paragraph}
          </p>
        ))}
      </section>

      <section className={styles.longGrid}>
        <article className={styles.lessonCard}>
          <h2>{locale === 'en' ? 'Core Topics' : 'Ключевые темы'}</h2>
          <ul>
            {tutorial.coreTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </article>

        <article className={styles.lessonCard}>
          <h2>{locale === 'en' ? '8-Week Roadmap' : 'Roadmap на 8 недель'}</h2>
          <ol>
            {tutorial.roadmap.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className={styles.longGrid}>
        <article className={styles.lessonCard}>
          <h2>{locale === 'en' ? 'Guided Learning' : 'Пошаговые гайды'}</h2>
          <ol>
            {tutorial.guidedPractice.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className={styles.lessonCard}>
          <h2>{locale === 'en' ? 'Common Mistakes' : 'Частые ошибки'}</h2>
          <ul>
            {tutorial.pitfalls.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.longGrid}>
        <article className={styles.lessonCard}>
          <h2>{locale === 'en' ? 'Project Ideas' : 'Идеи для проектов'}</h2>
          <ul>
            {tutorial.projectIdeas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.lessonCard}>
          <h2>{locale === 'en' ? 'What to Read Next' : 'Что изучать дальше'}</h2>
          <ul>
            {tutorial.nextResources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.examples}>
        <h2>{locale === 'en' ? 'Code Examples' : 'Примеры кода'}</h2>
        {tutorial.snippets.map((snippet) => (
          <article key={snippet.title} className={styles.codeCard}>
            <h3>{snippet.title}</h3>
            <pre>
              <code>{snippet.code}</code>
            </pre>
          </article>
        ))}
      </section>
    </main>
  );
};

export default TutorialPage;
