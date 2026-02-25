import LanguageList from '../components/LanguageList';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { tutorialsByLocale } from '../data/tutorials';
import styles from '../styles/Page.module.css';

const HomeRu = (): JSX.Element => {
  return (
    <main className={styles.page}>
      <div className={styles.noise} aria-hidden="true" />
      <section className={styles.hero}>
        <LanguageSwitcher locale="ru" />
        <h1>SyntaxLab</h1>
        <p>
          Изучай популярные языки программирования в одном месте. Выбирай направление,
          проходи практические шаги и переходи от базы к реальным проектам.
        </p>
        <div className={styles.stats}>
          <span>30+ популярных языков</span>
          <span>Два языка интерфейса: EN / RU</span>
          <span>Треки от новичка до advanced</span>
        </div>
      </section>
      <LanguageList locale="ru" items={tutorialsByLocale.ru} />
    </main>
  );
};

export default HomeRu;
