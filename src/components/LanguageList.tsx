import { Link } from 'react-router-dom';
import type { Locale, TutorialListItem } from '../data/tutorials';
import styles from '../styles/LanguageList.module.css';

type Props = {
  locale: Locale;
  items: TutorialListItem[];
};

const LanguageList = ({ locale, items }: Props): JSX.Element => {
  const popularityLabel = locale === 'en' ? 'Popularity Index' : 'Индекс популярности';

  return (
    <section>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.slug} className={styles.card}>
            <Link to={`/${locale}/languages/${item.slug}`} className={styles.link}>
              <span className={styles.glow} style={{ background: item.gradient }} aria-hidden="true" />
              <div className={styles.head}>
                <span className={styles.badge}>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.shortDescription}</p>
                </div>
              </div>
              <div className={styles.meta}>
                <span>{item.category}</span>
                <span>{item.difficulty}</span>
              </div>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={`${item.slug}-${tag}`}>{tag}</span>
                ))}
              </div>
              <div className={styles.popularity}>
                <span>{popularityLabel}</span>
                <strong>{item.popularity}</strong>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LanguageList;
