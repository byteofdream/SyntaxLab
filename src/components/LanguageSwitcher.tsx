import { useNavigate } from 'react-router-dom';
import type { Locale } from '../data/tutorials';
import styles from '../styles/LanguageSwitcher.module.css';

type Props = {
  locale: Locale;
  slug?: string;
};

const LanguageSwitcher = ({ locale, slug }: Props): JSX.Element => {
  const navigate = useNavigate();

  const goTo = (nextLocale: Locale): void => {
    if (slug) {
      navigate(`/${nextLocale}/languages/${slug}`);
      return;
    }

    navigate(nextLocale === 'en' ? '/en' : '/ru');
  };

  return (
    <div className={styles.switcher} role="tablist" aria-label="Language selector">
      <button
        className={locale === 'en' ? styles.active : ''}
        onClick={() => goTo('en')}
        type="button"
      >
        English
      </button>
      <button
        className={locale === 'ru' ? styles.active : ''}
        onClick={() => goTo('ru')}
        type="button"
      >
        Русский
      </button>
    </div>
  );
};

export default LanguageSwitcher;
