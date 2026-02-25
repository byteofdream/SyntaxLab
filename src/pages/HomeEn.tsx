import LanguageList from '../components/LanguageList';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { tutorialsByLocale } from '../data/tutorials';
import styles from '../styles/Page.module.css';

const HomeEn = (): JSX.Element => {
  return (
    <main className={styles.page}>
      <div className={styles.noise} aria-hidden="true" />
      <section className={styles.hero}>
        <LanguageSwitcher locale="en" />
        <h1>SyntaxLab</h1>
        <p>
          Learn popular programming languages on one platform. Pick a track, follow practical steps,
          and move from basics to real projects.
        </p>
        <div className={styles.stats}>
          <span>30+ popular languages</span>
          <span>Bilingual: EN / RU</span>
          <span>Beginner to advanced paths</span>
        </div>
      </section>
      <LanguageList locale="en" items={tutorialsByLocale.en} />
    </main>
  );
};

export default HomeEn;
