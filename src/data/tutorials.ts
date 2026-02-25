export type Locale = 'en' | 'ru';

type Difficulty = 'beginner' | 'intermediate' | 'advanced';
type Category =
  | 'web'
  | 'backend'
  | 'systems'
  | 'data'
  | 'mobile'
  | 'functional'
  | 'scripting'
  | 'database'
  | 'enterprise'
  | 'blockchain'
  | 'game';

type TutorialSeed = {
  slug: string;
  title: string;
  icon: string;
  category: Category;
  difficulty: Difficulty;
  popularity: number;
  tags: string[];
  gradient: string;
  shortDescription: {
    en: string;
    ru: string;
  };
  overview: {
    en: string;
    ru: string;
  };
  useCases: {
    en: string[];
    ru: string[];
  };
};

type Snippet = {
  title: {
    en: string;
    ru: string;
  };
  code: string;
};

export type TutorialListItem = {
  slug: string;
  title: string;
  icon: string;
  category: string;
  difficulty: string;
  popularity: number;
  tags: string[];
  gradient: string;
  shortDescription: string;
};

export type TutorialDetail = TutorialListItem & {
  overview: string;
  useCases: string[];
  firstSteps: string[];
  deepDive: string[];
  coreTopics: string[];
  roadmap: string[];
  guidedPractice: string[];
  pitfalls: string[];
  projectIdeas: string[];
  nextResources: string[];
  snippets: Array<{
    title: string;
    code: string;
  }>;
};

const difficultyLabel: Record<Locale, Record<Difficulty, string>> = {
  en: {
    beginner: 'Beginner Friendly',
    intermediate: 'Intermediate',
    advanced: 'Advanced'
  },
  ru: {
    beginner: 'Подходит новичкам',
    intermediate: 'Средний уровень',
    advanced: 'Продвинутый уровень'
  }
};

const categoryLabel: Record<Locale, Record<Category, string>> = {
  en: {
    web: 'Web Development',
    backend: 'Backend',
    systems: 'Systems',
    data: 'Data & AI',
    mobile: 'Mobile',
    functional: 'Functional',
    scripting: 'Automation',
    database: 'Databases',
    enterprise: 'Enterprise',
    blockchain: 'Blockchain',
    game: 'Game Dev'
  },
  ru: {
    web: 'Веб-разработка',
    backend: 'Бэкенд',
    systems: 'Системное программирование',
    data: 'Данные и AI',
    mobile: 'Мобайл',
    functional: 'Функциональное',
    scripting: 'Автоматизация',
    database: 'Базы данных',
    enterprise: 'Enterprise',
    blockchain: 'Блокчейн',
    game: 'Геймдев'
  }
};

const tutorials: TutorialSeed[] = [
  {
    slug: 'javascript',
    title: 'JavaScript',
    icon: 'JS',
    category: 'web',
    difficulty: 'beginner',
    popularity: 99,
    tags: ['Frontend', 'Node.js', 'React'],
    gradient: 'linear-gradient(135deg, #ffe082 0%, #ffb300 100%)',
    shortDescription: {
      en: 'Main language of modern web apps and frontend frameworks.',
      ru: 'Главный язык современных веб-приложений и фронтенда.'
    },
    overview: {
      en: 'JavaScript powers interactive websites, browser apps, and a large part of backend services with Node.js.',
      ru: 'JavaScript лежит в основе интерактивных сайтов, браузерных приложений и большого числа серверных сервисов на Node.js.'
    },
    useCases: {
      en: ['Web interfaces', 'APIs with Node.js', 'Browser extensions'],
      ru: ['Интерфейсы сайтов', 'API на Node.js', 'Браузерные расширения']
    }
  },
  {
    slug: 'typescript',
    title: 'TypeScript',
    icon: 'TS',
    category: 'web',
    difficulty: 'beginner',
    popularity: 94,
    tags: ['Types', 'Frontend', 'Backend'],
    gradient: 'linear-gradient(135deg, #90caf9 0%, #1e88e5 100%)',
    shortDescription: {
      en: 'Typed superset of JavaScript for scalable apps.',
      ru: 'Типизированное расширение JavaScript для масштабируемых проектов.'
    },
    overview: {
      en: 'TypeScript helps teams write safer code, catch bugs early, and keep large codebases maintainable.',
      ru: 'TypeScript помогает командам писать более надежный код, раньше ловить ошибки и поддерживать большие проекты.'
    },
    useCases: {
      en: ['Large React apps', 'Node.js services', 'SDK development'],
      ru: ['Крупные React-приложения', 'Сервисы на Node.js', 'Разработка SDK']
    }
  },
  {
    slug: 'python',
    title: 'Python',
    icon: 'PY',
    category: 'data',
    difficulty: 'beginner',
    popularity: 100,
    tags: ['AI', 'Automation', 'Backend'],
    gradient: 'linear-gradient(135deg, #a5d6a7 0%, #43a047 100%)',
    shortDescription: {
      en: 'Universal language for data science, AI, backend, and scripting.',
      ru: 'Универсальный язык для data science, AI, бэкенда и автоматизации.'
    },
    overview: {
      en: 'Python is known for readability and huge ecosystems in machine learning, data analysis, and automation.',
      ru: 'Python ценят за читаемость и мощную экосистему для ML, аналитики данных и автоматизации.'
    },
    useCases: {
      en: ['Machine learning', 'Data processing', 'Automation scripts'],
      ru: ['Машинное обучение', 'Обработка данных', 'Скрипты автоматизации']
    }
  },
  {
    slug: 'java',
    title: 'Java',
    icon: 'JV',
    category: 'enterprise',
    difficulty: 'intermediate',
    popularity: 91,
    tags: ['Spring', 'Enterprise', 'Android'],
    gradient: 'linear-gradient(135deg, #ffcc80 0%, #f57c00 100%)',
    shortDescription: {
      en: 'Stable enterprise language with mature tooling and frameworks.',
      ru: 'Надежный enterprise-язык с зрелыми инструментами и фреймворками.'
    },
    overview: {
      en: 'Java remains a core technology for enterprise systems, banking software, and high-load backend platforms.',
      ru: 'Java остается ключевой технологией для enterprise-систем, банковского ПО и высоконагруженных бэкендов.'
    },
    useCases: {
      en: ['Corporate backend', 'Microservices', 'Android legacy apps'],
      ru: ['Корпоративный бэкенд', 'Микросервисы', 'Legacy-приложения Android']
    }
  },
  {
    slug: 'csharp',
    title: 'C#',
    icon: 'C#',
    category: 'backend',
    difficulty: 'intermediate',
    popularity: 89,
    tags: ['.NET', 'Unity', 'Desktop'],
    gradient: 'linear-gradient(135deg, #ce93d8 0%, #8e24aa 100%)',
    shortDescription: {
      en: 'Strong .NET language for backend, desktop, and games.',
      ru: 'Сильный язык экосистемы .NET для бэкенда, десктопа и игр.'
    },
    overview: {
      en: 'C# offers rich tooling in Visual Studio and is a top choice for modern .NET APIs and Unity game development.',
      ru: 'C# дает мощный tooling в Visual Studio и часто выбирается для .NET API и разработки игр на Unity.'
    },
    useCases: {
      en: ['ASP.NET APIs', 'Unity games', 'Desktop apps'],
      ru: ['ASP.NET API', 'Игры на Unity', 'Десктопные приложения']
    }
  },
  {
    slug: 'cpp',
    title: 'C++',
    icon: 'C++',
    category: 'systems',
    difficulty: 'advanced',
    popularity: 85,
    tags: ['Performance', 'Game Engines', 'Embedded'],
    gradient: 'linear-gradient(135deg, #b0bec5 0%, #546e7a 100%)',
    shortDescription: {
      en: 'High-performance language for engines, systems, and low-level software.',
      ru: 'Высокопроизводительный язык для движков, систем и низкоуровневого ПО.'
    },
    overview: {
      en: 'C++ gives precise memory control and high performance, useful in game engines, trading systems, and embedded devices.',
      ru: 'C++ дает точный контроль памяти и высокую производительность для игровых движков, trading-систем и embedded-устройств.'
    },
    useCases: {
      en: ['Game engines', 'Embedded software', 'Low-latency systems'],
      ru: ['Игровые движки', 'Embedded ПО', 'Системы с низкой задержкой']
    }
  },
  {
    slug: 'c',
    title: 'C',
    icon: 'C',
    category: 'systems',
    difficulty: 'advanced',
    popularity: 83,
    tags: ['OS', 'Embedded', 'Compilers'],
    gradient: 'linear-gradient(135deg, #cfd8dc 0%, #607d8b 100%)',
    shortDescription: {
      en: 'Classic systems language for operating systems and firmware.',
      ru: 'Классический системный язык для ОС и прошивок.'
    },
    overview: {
      en: 'C is foundational for system software and teaches strong understanding of memory, pointers, and low-level architecture.',
      ru: 'C является фундаментом системного ПО и отлично прокачивает понимание памяти, указателей и архитектуры.'
    },
    useCases: {
      en: ['Kernel modules', 'Firmware', 'Runtime libraries'],
      ru: ['Модули ядра', 'Прошивки', 'Системные библиотеки']
    }
  },
  {
    slug: 'go',
    title: 'Go',
    icon: 'GO',
    category: 'backend',
    difficulty: 'beginner',
    popularity: 87,
    tags: ['Cloud', 'Microservices', 'Concurrency'],
    gradient: 'linear-gradient(135deg, #80deea 0%, #00acc1 100%)',
    shortDescription: {
      en: 'Simple and fast language for cloud services and distributed systems.',
      ru: 'Простой и быстрый язык для cloud-сервисов и распределенных систем.'
    },
    overview: {
      en: 'Go focuses on readable code, fast compilation, and excellent concurrency support for network services.',
      ru: 'Go делает акцент на читаемости, быстрой компиляции и удобной конкурентности для сетевых сервисов.'
    },
    useCases: {
      en: ['Cloud APIs', 'DevOps tools', 'Network services'],
      ru: ['Cloud API', 'DevOps-инструменты', 'Сетевые сервисы']
    }
  },
  {
    slug: 'rust',
    title: 'Rust',
    icon: 'RS',
    category: 'systems',
    difficulty: 'advanced',
    popularity: 82,
    tags: ['Memory Safety', 'CLI', 'Backend'],
    gradient: 'linear-gradient(135deg, #ffab91 0%, #d84315 100%)',
    shortDescription: {
      en: 'System language with memory safety and strong performance.',
      ru: 'Системный язык с безопасностью памяти и высокой производительностью.'
    },
    overview: {
      en: 'Rust eliminates many memory bugs at compile time while staying close to native performance.',
      ru: 'Rust убирает множество ошибок памяти на этапе компиляции и при этом остается очень быстрым.'
    },
    useCases: {
      en: ['CLI tools', 'WebAssembly', 'High-reliability backend'],
      ru: ['CLI-инструменты', 'WebAssembly', 'Надежный бэкенд']
    }
  },
  {
    slug: 'php',
    title: 'PHP',
    icon: 'PHP',
    category: 'backend',
    difficulty: 'beginner',
    popularity: 84,
    tags: ['Laravel', 'WordPress', 'Web'],
    gradient: 'linear-gradient(135deg, #b39ddb 0%, #5e35b1 100%)',
    shortDescription: {
      en: 'Battle-tested backend language for web platforms and CMS.',
      ru: 'Проверенный временем бэкенд-язык для веб-платформ и CMS.'
    },
    overview: {
      en: 'PHP still powers a large part of the web and has productive frameworks for business applications.',
      ru: 'PHP до сих пор обеспечивает значительную часть веба и имеет продуктивные фреймворки для бизнес-приложений.'
    },
    useCases: {
      en: ['CMS and portals', 'E-commerce backends', 'Web APIs'],
      ru: ['CMS и порталы', 'E-commerce бэкенд', 'Web API']
    }
  },
  {
    slug: 'ruby',
    title: 'Ruby',
    icon: 'RB',
    category: 'backend',
    difficulty: 'beginner',
    popularity: 76,
    tags: ['Rails', 'Startups', 'Web'],
    gradient: 'linear-gradient(135deg, #ef9a9a 0%, #c62828 100%)',
    shortDescription: {
      en: 'Developer-friendly language known for productivity with Rails.',
      ru: 'Дружелюбный язык, известный высокой скоростью разработки на Rails.'
    },
    overview: {
      en: 'Ruby emphasizes elegant syntax and productivity, especially for fast web product development.',
      ru: 'Ruby делает упор на выразительный синтаксис и скорость создания веб-продуктов.'
    },
    useCases: {
      en: ['MVP products', 'Web platforms', 'Automation scripts'],
      ru: ['MVP-продукты', 'Веб-платформы', 'Скрипты автоматизации']
    }
  },
  {
    slug: 'swift',
    title: 'Swift',
    icon: 'SW',
    category: 'mobile',
    difficulty: 'intermediate',
    popularity: 80,
    tags: ['iOS', 'macOS', 'Apple'],
    gradient: 'linear-gradient(135deg, #ffcc80 0%, #ef6c00 100%)',
    shortDescription: {
      en: 'Primary language for iOS and Apple ecosystem apps.',
      ru: 'Основной язык для iOS и приложений экосистемы Apple.'
    },
    overview: {
      en: 'Swift is modern, safe, and deeply integrated with Apple platforms and frameworks like SwiftUI.',
      ru: 'Swift современный, безопасный и глубоко интегрирован в платформы Apple и фреймворки вроде SwiftUI.'
    },
    useCases: {
      en: ['iOS apps', 'macOS apps', 'Apple Watch apps'],
      ru: ['iOS-приложения', 'macOS-приложения', 'Приложения для Apple Watch']
    }
  },
  {
    slug: 'kotlin',
    title: 'Kotlin',
    icon: 'KT',
    category: 'mobile',
    difficulty: 'intermediate',
    popularity: 81,
    tags: ['Android', 'JVM', 'Backend'],
    gradient: 'linear-gradient(135deg, #b388ff 0%, #5e35b1 100%)',
    shortDescription: {
      en: 'Official Android language and productive JVM alternative.',
      ru: 'Официальный язык Android и продуктивная альтернатива Java на JVM.'
    },
    overview: {
      en: 'Kotlin improves Java ergonomics, supports modern syntax, and is excellent for Android and backend development.',
      ru: 'Kotlin улучшает удобство Java, предлагает современный синтаксис и отлично подходит для Android и бэкенда.'
    },
    useCases: {
      en: ['Android apps', 'JVM services', 'Multiplatform code'],
      ru: ['Android-приложения', 'Сервисы на JVM', 'Мультиплатформенный код']
    }
  },
  {
    slug: 'dart',
    title: 'Dart',
    icon: 'DT',
    category: 'mobile',
    difficulty: 'beginner',
    popularity: 75,
    tags: ['Flutter', 'Cross-platform', 'UI'],
    gradient: 'linear-gradient(135deg, #81d4fa 0%, #0288d1 100%)',
    shortDescription: {
      en: 'Language behind Flutter for cross-platform mobile and web apps.',
      ru: 'Язык Flutter для кроссплатформенной мобильной и веб-разработки.'
    },
    overview: {
      en: 'Dart with Flutter lets teams ship one codebase across iOS, Android, web, and desktop.',
      ru: 'Dart вместе с Flutter позволяет выпускать один код для iOS, Android, web и desktop.'
    },
    useCases: {
      en: ['Cross-platform apps', 'Mobile MVP', 'UI-heavy products'],
      ru: ['Кроссплатформенные приложения', 'Мобильные MVP', 'Продукты с насыщенным UI']
    }
  },
  {
    slug: 'scala',
    title: 'Scala',
    icon: 'SC',
    category: 'functional',
    difficulty: 'advanced',
    popularity: 66,
    tags: ['JVM', 'Functional', 'Big Data'],
    gradient: 'linear-gradient(135deg, #ef9a9a 0%, #ad1457 100%)',
    shortDescription: {
      en: 'JVM language combining OOP and functional programming.',
      ru: 'Язык для JVM, сочетающий ООП и функциональное программирование.'
    },
    overview: {
      en: 'Scala is used for robust backend systems and data platforms, especially with Apache Spark.',
      ru: 'Scala применяется в надежных бэкендах и data-платформах, особенно рядом с Apache Spark.'
    },
    useCases: {
      en: ['Data pipelines', 'Event-driven backend', 'Financial systems'],
      ru: ['Data-пайплайны', 'Event-driven бэкенд', 'Финансовые системы']
    }
  },
  {
    slug: 'r',
    title: 'R',
    icon: 'R',
    category: 'data',
    difficulty: 'intermediate',
    popularity: 70,
    tags: ['Statistics', 'Analytics', 'Research'],
    gradient: 'linear-gradient(135deg, #c5cae9 0%, #3949ab 100%)',
    shortDescription: {
      en: 'Specialized language for statistics, analytics, and research.',
      ru: 'Специализированный язык для статистики, аналитики и исследований.'
    },
    overview: {
      en: 'R is widely used in analytics and academia for statistical modeling and rich data visualization.',
      ru: 'R широко используется в аналитике и академической среде для статистического моделирования и визуализации данных.'
    },
    useCases: {
      en: ['Statistical modeling', 'Data visualization', 'Research notebooks'],
      ru: ['Статистическое моделирование', 'Визуализация данных', 'Исследовательские ноутбуки']
    }
  },
  {
    slug: 'sql',
    title: 'SQL',
    icon: 'SQL',
    category: 'database',
    difficulty: 'beginner',
    popularity: 97,
    tags: ['Databases', 'Analytics', 'BI'],
    gradient: 'linear-gradient(135deg, #80cbc4 0%, #00695c 100%)',
    shortDescription: {
      en: 'Core language for querying and managing relational databases.',
      ru: 'Базовый язык для работы с реляционными базами данных.'
    },
    overview: {
      en: 'SQL is essential for backend development, analytics, business intelligence, and data engineering.',
      ru: 'SQL обязателен для бэкенда, аналитики, BI и data engineering.'
    },
    useCases: {
      en: ['Data queries', 'Reporting', 'Database management'],
      ru: ['Запросы к данным', 'Отчетность', 'Управление базами']
    }
  },
  {
    slug: 'bash',
    title: 'Bash',
    icon: 'SH',
    category: 'scripting',
    difficulty: 'beginner',
    popularity: 78,
    tags: ['Linux', 'CLI', 'DevOps'],
    gradient: 'linear-gradient(135deg, #a5d6a7 0%, #2e7d32 100%)',
    shortDescription: {
      en: 'Shell scripting language for automation and server operations.',
      ru: 'Язык shell-скриптов для автоматизации и работы с серверами.'
    },
    overview: {
      en: 'Bash is a practical tool for automation, deployment pipelines, and everyday developer productivity.',
      ru: 'Bash полезен для автоматизации, деплоя и ежедневной продуктивности разработчика.'
    },
    useCases: {
      en: ['CI/CD scripts', 'System tasks', 'Server maintenance'],
      ru: ['CI/CD-скрипты', 'Системные задачи', 'Поддержка серверов']
    }
  },
  {
    slug: 'powershell',
    title: 'PowerShell',
    icon: 'PS',
    category: 'scripting',
    difficulty: 'intermediate',
    popularity: 69,
    tags: ['Windows', 'Automation', 'Cloud'],
    gradient: 'linear-gradient(135deg, #90caf9 0%, #1565c0 100%)',
    shortDescription: {
      en: 'Automation language and shell for Windows and cloud operations.',
      ru: 'Язык автоматизации и shell для Windows и облачной инфраструктуры.'
    },
    overview: {
      en: 'PowerShell combines scripting with object-based command pipelines, ideal for administration tasks.',
      ru: 'PowerShell объединяет скрипты и объектные командные пайплайны, что удобно для администрирования.'
    },
    useCases: {
      en: ['Windows administration', 'Azure automation', 'Deployment tooling'],
      ru: ['Администрирование Windows', 'Автоматизация Azure', 'Инструменты деплоя']
    }
  },
  {
    slug: 'lua',
    title: 'Lua',
    icon: 'LUA',
    category: 'game',
    difficulty: 'beginner',
    popularity: 64,
    tags: ['Game Scripting', 'Embedded', 'Fast'],
    gradient: 'linear-gradient(135deg, #9fa8da 0%, #283593 100%)',
    shortDescription: {
      en: 'Lightweight scripting language for games and embedded systems.',
      ru: 'Легкий скриптовый язык для игр и встраиваемых систем.'
    },
    overview: {
      en: 'Lua is small, embeddable, and frequently used for game logic, plugins, and custom automation.',
      ru: 'Lua компактный, легко встраивается и часто используется для игровой логики, плагинов и автоматизации.'
    },
    useCases: {
      en: ['Game logic', 'Embedded scripts', 'Plugin ecosystems'],
      ru: ['Игровая логика', 'Embedded-скрипты', 'Экосистемы плагинов']
    }
  },
  {
    slug: 'perl',
    title: 'Perl',
    icon: 'PL',
    category: 'scripting',
    difficulty: 'advanced',
    popularity: 58,
    tags: ['Text Processing', 'Legacy', 'Automation'],
    gradient: 'linear-gradient(135deg, #b0bec5 0%, #37474f 100%)',
    shortDescription: {
      en: 'Powerful scripting language for text processing and automation.',
      ru: 'Мощный скриптовый язык для обработки текста и автоматизации.'
    },
    overview: {
      en: 'Perl remains valuable in legacy systems and advanced text/data transformation workflows.',
      ru: 'Perl остается полезным в legacy-системах и сложной обработке текстов и данных.'
    },
    useCases: {
      en: ['Log processing', 'Legacy maintenance', 'Automation pipelines'],
      ru: ['Обработка логов', 'Поддержка legacy', 'Пайплайны автоматизации']
    }
  },
  {
    slug: 'haskell',
    title: 'Haskell',
    icon: 'HS',
    category: 'functional',
    difficulty: 'advanced',
    popularity: 57,
    tags: ['Functional', 'Academic', 'Type System'],
    gradient: 'linear-gradient(135deg, #d1c4e9 0%, #4527a0 100%)',
    shortDescription: {
      en: 'Pure functional language with strong type system.',
      ru: 'Чистый функциональный язык с очень строгой системой типов.'
    },
    overview: {
      en: 'Haskell is excellent for learning functional programming principles and building correctness-oriented code.',
      ru: 'Haskell отлично подходит для изучения функциональных подходов и разработки кода с упором на корректность.'
    },
    useCases: {
      en: ['Compiler design', 'Research software', 'Reliable domain logic'],
      ru: ['Разработка компиляторов', 'Исследовательское ПО', 'Надежная доменная логика']
    }
  },
  {
    slug: 'elixir',
    title: 'Elixir',
    icon: 'EX',
    category: 'backend',
    difficulty: 'intermediate',
    popularity: 61,
    tags: ['BEAM', 'Realtime', 'Phoenix'],
    gradient: 'linear-gradient(135deg, #ce93d8 0%, #6a1b9a 100%)',
    shortDescription: {
      en: 'Concurrent language on BEAM VM for scalable realtime apps.',
      ru: 'Конкурентный язык на BEAM VM для масштабируемых realtime-приложений.'
    },
    overview: {
      en: 'Elixir is built for fault-tolerant distributed systems and realtime web apps.',
      ru: 'Elixir отлично подходит для отказоустойчивых распределенных систем и realtime-веба.'
    },
    useCases: {
      en: ['Realtime chat', 'Distributed services', 'Highly available APIs'],
      ru: ['Realtime-чат', 'Распределенные сервисы', 'Высокодоступные API']
    }
  },
  {
    slug: 'clojure',
    title: 'Clojure',
    icon: 'CLJ',
    category: 'functional',
    difficulty: 'advanced',
    popularity: 54,
    tags: ['Lisp', 'JVM', 'Functional'],
    gradient: 'linear-gradient(135deg, #c5e1a5 0%, #558b2f 100%)',
    shortDescription: {
      en: 'Modern Lisp on the JVM with immutable-first design.',
      ru: 'Современный Lisp на JVM с упором на неизменяемые структуры.'
    },
    overview: {
      en: 'Clojure offers concise syntax, immutable data structures, and excellent REPL-driven development.',
      ru: 'Clojure предлагает лаконичный синтаксис, неизменяемые структуры данных и удобную REPL-разработку.'
    },
    useCases: {
      en: ['Data transformations', 'Backend services', 'DSL development'],
      ru: ['Трансформация данных', 'Бэкенд-сервисы', 'Разработка DSL']
    }
  },
  {
    slug: 'julia',
    title: 'Julia',
    icon: 'JL',
    category: 'data',
    difficulty: 'intermediate',
    popularity: 62,
    tags: ['Scientific Computing', 'Math', 'Data'],
    gradient: 'linear-gradient(135deg, #d1c4e9 0%, #7b1fa2 100%)',
    shortDescription: {
      en: 'High-level language for scientific computing with strong performance.',
      ru: 'Высокоуровневый язык для научных вычислений с высокой производительностью.'
    },
    overview: {
      en: 'Julia combines developer-friendly syntax with speed close to lower-level languages in numeric tasks.',
      ru: 'Julia сочетает удобный синтаксис со скоростью, близкой к низкоуровневым языкам в вычислениях.'
    },
    useCases: {
      en: ['Scientific models', 'Numerical simulations', 'Data experiments'],
      ru: ['Научные модели', 'Численные симуляции', 'Эксперименты с данными']
    }
  },
  {
    slug: 'matlab',
    title: 'MATLAB',
    icon: 'ML',
    category: 'data',
    difficulty: 'intermediate',
    popularity: 59,
    tags: ['Engineering', 'Research', 'Math'],
    gradient: 'linear-gradient(135deg, #ffcc80 0%, #e65100 100%)',
    shortDescription: {
      en: 'Technical computing language popular in engineering and academia.',
      ru: 'Язык технических вычислений, популярный в инженерии и академической среде.'
    },
    overview: {
      en: 'MATLAB is widely used in signal processing, control systems, and engineering research.',
      ru: 'MATLAB широко используется в обработке сигналов, системах управления и инженерных исследованиях.'
    },
    useCases: {
      en: ['Signal processing', 'Control systems', 'Engineering simulations'],
      ru: ['Обработка сигналов', 'Системы управления', 'Инженерные симуляции']
    }
  },
  {
    slug: 'objective-c',
    title: 'Objective-C',
    icon: 'OC',
    category: 'mobile',
    difficulty: 'advanced',
    popularity: 51,
    tags: ['iOS Legacy', 'macOS', 'Apple'],
    gradient: 'linear-gradient(135deg, #b0bec5 0%, #455a64 100%)',
    shortDescription: {
      en: 'Legacy Apple platform language still present in older codebases.',
      ru: 'Legacy-язык платформ Apple, всё еще важный в старых проектах.'
    },
    overview: {
      en: 'Objective-C remains relevant when supporting older iOS/macOS applications and mixed Swift projects.',
      ru: 'Objective-C остается актуальным при поддержке старых iOS/macOS-приложений и смешанных Swift-проектов.'
    },
    useCases: {
      en: ['Legacy iOS support', 'Apple SDK integration', 'Mixed Swift codebases'],
      ru: ['Поддержка legacy iOS', 'Интеграция с Apple SDK', 'Смешанные Swift-кодовые базы']
    }
  },
  {
    slug: 'solidity',
    title: 'Solidity',
    icon: 'SOL',
    category: 'blockchain',
    difficulty: 'advanced',
    popularity: 60,
    tags: ['Ethereum', 'Smart Contracts', 'Web3'],
    gradient: 'linear-gradient(135deg, #bdbdbd 0%, #424242 100%)',
    shortDescription: {
      en: 'Smart contract language for Ethereum and EVM networks.',
      ru: 'Язык смарт-контрактов для Ethereum и EVM-сетей.'
    },
    overview: {
      en: 'Solidity is used to write smart contracts, decentralized apps, and on-chain protocols.',
      ru: 'Solidity используется для смарт-контрактов, dApp и on-chain протоколов.'
    },
    useCases: {
      en: ['DeFi contracts', 'NFT platforms', 'On-chain governance'],
      ru: ['DeFi-контракты', 'NFT-платформы', 'On-chain управление']
    }
  },
  {
    slug: 'fsharp',
    title: 'F#',
    icon: 'F#',
    category: 'functional',
    difficulty: 'intermediate',
    popularity: 52,
    tags: ['.NET', 'Functional', 'Finance'],
    gradient: 'linear-gradient(135deg, #90caf9 0%, #0d47a1 100%)',
    shortDescription: {
      en: 'Functional-first language in .NET ecosystem.',
      ru: 'Язык с функциональным уклоном в экосистеме .NET.'
    },
    overview: {
      en: 'F# is concise and expressive, suitable for domain-heavy logic and data transformations.',
      ru: 'F# лаконичный и выразительный, хорошо подходит для сложной доменной логики и трансформации данных.'
    },
    useCases: {
      en: ['Domain modeling', 'Financial calculations', '.NET data apps'],
      ru: ['Доменное моделирование', 'Финансовые расчеты', '.NET data-приложения']
    }
  },
  {
    slug: 'visual-basic',
    title: 'Visual Basic',
    icon: 'VB',
    category: 'enterprise',
    difficulty: 'beginner',
    popularity: 47,
    tags: ['Legacy', 'Windows', '.NET'],
    gradient: 'linear-gradient(135deg, #c5cae9 0%, #303f9f 100%)',
    shortDescription: {
      en: 'Legacy-friendly language still used in enterprise maintenance.',
      ru: 'Язык, который до сих пор встречается в поддержке enterprise-legacy.'
    },
    overview: {
      en: 'Visual Basic is still encountered in internal business tools and older corporate systems.',
      ru: 'Visual Basic по-прежнему встречается во внутренних бизнес-инструментах и старых корпоративных системах.'
    },
    useCases: {
      en: ['Legacy support', 'Internal utilities', 'Office automation'],
      ru: ['Поддержка legacy', 'Внутренние утилиты', 'Автоматизация Office']
    }
  },
  {
    slug: 'assembly',
    title: 'Assembly',
    icon: 'ASM',
    category: 'systems',
    difficulty: 'advanced',
    popularity: 50,
    tags: ['Low-level', 'CPU', 'Optimization'],
    gradient: 'linear-gradient(135deg, #bcaaa4 0%, #4e342e 100%)',
    shortDescription: {
      en: 'Low-level language close to CPU instructions.',
      ru: 'Низкоуровневый язык, близкий к машинным инструкциям CPU.'
    },
    overview: {
      en: 'Assembly helps deeply understand computer architecture, optimization, and performance bottlenecks.',
      ru: 'Assembly помогает глубоко понять архитектуру компьютера, оптимизацию и узкие места производительности.'
    },
    useCases: {
      en: ['Firmware', 'Reverse engineering', 'Performance tuning'],
      ru: ['Прошивки', 'Реверс-инжиниринг', 'Тонкая оптимизация']
    }
  },
  {
    slug: 'groovy',
    title: 'Groovy',
    icon: 'GR',
    category: 'backend',
    difficulty: 'intermediate',
    popularity: 48,
    tags: ['JVM', 'Gradle', 'Scripting'],
    gradient: 'linear-gradient(135deg, #c5e1a5 0%, #33691e 100%)',
    shortDescription: {
      en: 'Dynamic JVM language used in scripting and build pipelines.',
      ru: 'Динамический язык для JVM, часто используемый в скриптах и build-пайплайнах.'
    },
    overview: {
      en: 'Groovy is often used for Gradle scripts and rapid JVM automation tasks.',
      ru: 'Groovy часто используется в Gradle-скриптах и быстрой автоматизации в JVM-проектах.'
    },
    useCases: {
      en: ['Gradle build scripts', 'Internal automation', 'JVM utilities'],
      ru: ['Gradle-скрипты', 'Внутренняя автоматизация', 'JVM-утилиты']
    }
  }
];

const snippetsBySlug: Record<string, Snippet[]> = {
  javascript: [
    {
      title: { en: 'Variables and Function', ru: 'Переменные и функция' },
      code: "const platform = 'SyntaxLab';\nconst lessons = 42;\n\nfunction greet(user) {\n  return `Welcome, ${user}!`;\n}"
    }
  ],
  typescript: [
    {
      title: { en: 'Typed Function', ru: 'Типизированная функция' },
      code: "type User = { id: number; name: string };\n\nconst greet = (user: User): string => {\n  return `Hello, ${user.name}`;\n};"
    }
  ],
  python: [
    {
      title: { en: 'Simple Loop', ru: 'Простой цикл' },
      code: "languages = ['Python', 'Go', 'Rust']\nfor name in languages:\n    print(f'Learning {name}')"
    }
  ],
  java: [
    {
      title: { en: 'Class Example', ru: 'Пример класса' },
      code: 'class App {\n  public static void main(String[] args) {\n    System.out.println("Hello Java");\n  }\n}'
    }
  ],
  csharp: [
    {
      title: { en: 'Minimal Program', ru: 'Минимальная программа' },
      code: 'using System;\n\nConsole.WriteLine("Hello C#");'
    }
  ],
  cpp: [
    {
      title: { en: 'Hello World', ru: 'Hello World' },
      code: '#include <iostream>\n\nint main() {\n  std::cout << "Hello C++\\n";\n  return 0;\n}'
    }
  ],
  c: [
    {
      title: { en: 'C Starter', ru: 'Старт на C' },
      code: '#include <stdio.h>\n\nint main(void) {\n  printf("Hello C\\n");\n  return 0;\n}'
    }
  ],
  go: [
    {
      title: { en: 'Go Main', ru: 'Go main' },
      code: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello Go")\n}'
    }
  ],
  rust: [
    {
      title: { en: 'Rust Main', ru: 'Rust main' },
      code: 'fn main() {\n    println!("Hello Rust");\n}'
    }
  ],
  sql: [
    {
      title: { en: 'Basic Query', ru: 'Базовый запрос' },
      code: 'SELECT name, created_at\nFROM users\nWHERE is_active = true\nORDER BY created_at DESC\nLIMIT 10;'
    }
  ],
  bash: [
    {
      title: { en: 'Shell Script', ru: 'Shell-скрипт' },
      code: '#!/usr/bin/env bash\nset -e\n\necho "Build started"\nnpm run build'
    }
  ],
  kotlin: [
    {
      title: { en: 'Kotlin Function', ru: 'Функция Kotlin' },
      code: 'fun greet(user: String): String {\n  return "Hello, $user"\n}'
    }
  ],
  swift: [
    {
      title: { en: 'Swift Function', ru: 'Функция Swift' },
      code: 'func greet(name: String) -> String {\n    return "Hello, \\(name)!"\n}'
    }
  ],
  dart: [
    {
      title: { en: 'Dart Starter', ru: 'Старт Dart' },
      code: 'void main() {\n  print("Hello Dart");\n}'
    }
  ],
  php: [
    {
      title: { en: 'PHP Function', ru: 'Функция PHP' },
      code: "<?php\nfunction greet(string $name): string {\n  return 'Hello, ' . $name;\n}"
    }
  ],
  ruby: [
    {
      title: { en: 'Ruby Method', ru: 'Метод Ruby' },
      code: 'def greet(name)\n  "Hello, #{name}"\nend'
    }
  ],
  solidity: [
    {
      title: { en: 'Simple Contract', ru: 'Простой контракт' },
      code: 'pragma solidity ^0.8.0;\n\ncontract Counter {\n  uint256 public value;\n\n  function inc() public {\n    value += 1;\n  }\n}'
    }
  ]
};

const fallbackSnippet = (language: string, locale: Locale): Snippet[] => {
  return [
    {
      title: {
        en: `${language} Starter`,
        ru: `Стартовый пример ${language}`
      },
      code:
        locale === 'en'
          ? `// Start learning ${language}\n// 1. Print a message\n// 2. Create a variable\n// 3. Write a function`
          : `// Начало изучения ${language}\n// 1. Выведите сообщение\n// 2. Создайте переменную\n// 3. Напишите функцию`
    }
  ];
};

const buildFirstSteps = (locale: Locale, title: string): string[] => {
  if (locale === 'en') {
    return [
      `Install a modern toolchain for ${title}.`,
      'Write and run a "Hello world" example.',
      'Learn variables, conditions, loops, and functions.',
      'Build a small mini-project and publish it to GitHub.'
    ];
  }

  return [
    `Установите современный toolchain для ${title}.`,
    'Напишите и запустите пример "Hello world".',
    'Изучите переменные, условия, циклы и функции.',
    'Сделайте мини-проект и опубликуйте его на GitHub.'
  ];
};

const coreTopicsByCategory: Record<Locale, Record<Category, string[]>> = {
  en: {
    web: ['Syntax and runtime model', 'DOM and browser APIs', 'State management basics', 'HTTP and asynchronous requests', 'Build tooling and debugging'],
    backend: ['Project architecture', 'API design principles', 'Authentication and authorization', 'Database integration', 'Testing and observability'],
    systems: ['Memory model fundamentals', 'Data structures and algorithms', 'Concurrency and threading', 'Profiling and optimization', 'Low-level debugging'],
    data: ['Data cleaning workflows', 'Statistics and probability basics', 'Visualization principles', 'Model evaluation metrics', 'Experiment reproducibility'],
    mobile: ['Platform project structure', 'UI layout and navigation', 'State and lifecycle handling', 'Networking and caching', 'Release and store delivery'],
    functional: ['Immutable data modeling', 'Pure functions and composition', 'Type-driven design', 'Error handling patterns', 'Functional architecture'],
    scripting: ['Command-line foundations', 'File and process automation', 'Environment management', 'Task scheduling', 'Operational safety checks'],
    database: ['Relational model basics', 'Joins and aggregations', 'Indexes and query plans', 'Transactions and consistency', 'Schema migration strategy'],
    enterprise: ['Layered architecture', 'Domain modeling', 'Integration patterns', 'Performance in large systems', 'Code quality standards'],
    blockchain: ['Smart-contract lifecycle', 'State and storage costs', 'Security audit checklist', 'Testing on local networks', 'Deployment governance'],
    game: ['Game loop concepts', 'Entity behavior scripting', 'Input and events', 'Performance constraints', 'Tooling and iteration workflow']
  },
  ru: {
    web: ['Синтаксис и модель выполнения', 'DOM и браузерные API', 'База управления состоянием', 'HTTP и асинхронные запросы', 'Инструменты сборки и отладка'],
    backend: ['Архитектура проекта', 'Принципы проектирования API', 'Аутентификация и авторизация', 'Интеграция с базой данных', 'Тестирование и наблюдаемость'],
    systems: ['Основы модели памяти', 'Структуры данных и алгоритмы', 'Конкурентность и потоки', 'Профилирование и оптимизация', 'Низкоуровневая отладка'],
    data: ['Очистка и подготовка данных', 'База статистики и вероятности', 'Принципы визуализации', 'Метрики качества моделей', 'Воспроизводимость экспериментов'],
    mobile: ['Структура мобильного проекта', 'UI-верстка и навигация', 'Состояние и жизненный цикл', 'Сеть и кэширование', 'Релиз и публикация в стор'],
    functional: ['Моделирование через immutable-данные', 'Чистые функции и композиция', 'Type-driven подход', 'Паттерны обработки ошибок', 'Функциональная архитектура'],
    scripting: ['База командной строки', 'Автоматизация файлов и процессов', 'Управление окружением', 'Планирование задач', 'Проверки безопасности скриптов'],
    database: ['Основы реляционной модели', 'JOIN и агрегации', 'Индексы и планы запросов', 'Транзакции и консистентность', 'Стратегия миграций'],
    enterprise: ['Слоистая архитектура', 'Доменное моделирование', 'Интеграционные паттерны', 'Производительность крупных систем', 'Стандарты качества кода'],
    blockchain: ['Жизненный цикл смарт-контракта', 'Состояние и стоимость хранения', 'Чеклист по безопасности', 'Тесты в локальных сетях', 'Стратегия деплоя и управления'],
    game: ['Концепция game loop', 'Скриптинг поведения сущностей', 'Ввод и события', 'Ограничения производительности', 'Инструменты быстрой итерации']
  }
};

const buildDeepDive = (locale: Locale, tutorial: TutorialSeed): string[] => {
  if (locale === 'en') {
    return [
      `${tutorial.title} is used in ${categoryLabel.en[tutorial.category].toLowerCase()} and is currently one of the most requested stacks in hiring pipelines. In SyntaxLab, this track focuses not only on syntax but on practical engineering decisions: how to structure code, how to avoid fragile abstractions, and how to move from examples to maintainable features.`,
      `To learn ${tutorial.title} effectively, study concepts in layers: first language basics, then tooling and debugging, then architecture. This sequence reduces cognitive overload and makes each new topic reusable across real tasks. The goal is to understand why a pattern is chosen, not just how to copy it.`,
      `This path is marked as ${difficultyLabel.en[tutorial.difficulty].toLowerCase()} and has a popularity score of ${tutorial.popularity}. That means learning it opens many project directions: ${tutorial.useCases.en.join(', ')}.`
    ];
  }

  return [
    `${tutorial.title} активно используется в направлении «${categoryLabel.ru[tutorial.category]}» и остается востребованным на рынке. В SyntaxLab этот трек строится не только вокруг синтаксиса, но и вокруг инженерных решений: как структурировать код, избегать хрупких абстракций и переходить от примеров к поддерживаемым фичам.`,
    `Эффективное обучение ${tutorial.title} лучше строить слоями: сначала база языка, затем tooling и отладка, затем архитектурные подходы. Такой порядок снижает перегрузку и помогает переносить знания в реальные задачи, а не только в учебные примеры.`,
    `Этот трек отмечен как «${difficultyLabel.ru[tutorial.difficulty]}», а его индекс популярности — ${tutorial.popularity}. После освоения можно уверенно двигаться в направления: ${tutorial.useCases.ru.join(', ')}.`
  ];
};

const buildRoadmap = (locale: Locale, tutorial: TutorialSeed): string[] => {
  if (locale === 'en') {
    return [
      `Weeks 1-2: Install environment, learn core syntax, and write small console tasks in ${tutorial.title}.`,
      `Weeks 3-4: Build one practical module with files, data structures, and validation logic.`,
      `Weeks 5-6: Connect ${tutorial.title} to its common ecosystem tools (${tutorial.tags.join(', ')}).`,
      'Weeks 7-8: Build a portfolio mini-project, add tests, and document decisions in README.'
    ];
  }

  return [
    `Недели 1-2: настрой окружение, изучи базовый синтаксис и сделай простые консольные задачи на ${tutorial.title}.`,
    `Недели 3-4: собери один практический модуль с файлами, структурами данных и валидацией.`,
    `Недели 5-6: подключи экосистемные инструменты ${tutorial.title} (${tutorial.tags.join(', ')}).`,
    'Недели 7-8: сделай портфолио-проект, добавь тесты и оформи README с архитектурными решениями.'
  ];
};

const buildGuidedPractice = (locale: Locale, tutorial: TutorialSeed): string[] => {
  if (locale === 'en') {
    return [
      `Guide 1: Recreate one small feature from a real product using ${tutorial.title} only.`,
      `Guide 2: Implement logging, validation, and error handling for the same feature.`,
      `Guide 3: Refactor code into modules and add automated checks.`,
      `Guide 4: Extend feature with one production-like requirement from ${tutorial.useCases.en[0]}.`
    ];
  }

  return [
    `Гайд 1: повтори небольшую фичу реального продукта только на ${tutorial.title}.`,
    'Гайд 2: добавь логирование, валидацию и обработку ошибок для той же фичи.',
    'Гайд 3: разнеси код по модулям и подключи автоматические проверки.',
    `Гайд 4: расширь фичу одним production-требованием из направления «${tutorial.useCases.ru[0]}».`
  ];
};

const buildPitfalls = (locale: Locale, tutorial: TutorialSeed): string[] => {
  if (locale === 'en') {
    return [
      `Skipping fundamentals in ${tutorial.title} and jumping directly to frameworks.`,
      'Copying snippets without understanding execution model and data flow.',
      'Ignoring debugging tools and relying only on console output.',
      'Building many tiny demos instead of one complete end-to-end project.'
    ];
  }

  return [
    `Пропуск фундаментальных тем ${tutorial.title} и быстрый переход к фреймворкам.`,
    'Копирование сниппетов без понимания модели выполнения и потока данных.',
    'Игнорирование инструментов отладки и работа только через print/console.',
    'Много маленьких демо вместо одного цельного end-to-end проекта.'
  ];
};

const buildProjectIdeas = (locale: Locale, tutorial: TutorialSeed): string[] => {
  if (locale === 'en') {
    return [
      `${tutorial.title} task tracker with roles, filters, and export.`,
      `${tutorial.title} API or automation tool focused on ${tutorial.useCases.en[0].toLowerCase()}.`,
      `${tutorial.title} analytics dashboard with simple metrics and alerts.`,
      `${tutorial.title} CLI utility to speed up repetitive development tasks.`
    ];
  }

  return [
    `Трекер задач на ${tutorial.title} с ролями, фильтрами и экспортом данных.`,
    `API или automation-инструмент на ${tutorial.title} под сценарий «${tutorial.useCases.ru[0]}».`,
    `Небольшой аналитический дашборд на ${tutorial.title} с метриками и алертами.`,
    `CLI-утилита на ${tutorial.title} для ускорения рутинных задач разработки.`
  ];
};

const buildNextResources = (locale: Locale, tutorial: TutorialSeed): string[] => {
  if (locale === 'en') {
    return [
      `${tutorial.title} official docs and release notes.`,
      `Community style guide and best practices for ${tutorial.title}.`,
      `${tutorial.title} roadmap repositories and production templates.`,
      `Open-source projects tagged with ${tutorial.tags[0]} to read real code.`
    ];
  }

  return [
    `Официальная документация и release notes по ${tutorial.title}.`,
    `Комьюнити-гайды и best practices для ${tutorial.title}.`,
    `Roadmap-репозитории и production-шаблоны по ${tutorial.title}.`,
    `Open-source проекты с тегом ${tutorial.tags[0]} для чтения реального кода.`
  ];
};

const mapToListItem = (locale: Locale, tutorial: TutorialSeed): TutorialListItem => ({
  slug: tutorial.slug,
  title: tutorial.title,
  icon: tutorial.icon,
  category: categoryLabel[locale][tutorial.category],
  difficulty: difficultyLabel[locale][tutorial.difficulty],
  popularity: tutorial.popularity,
  tags: tutorial.tags,
  gradient: tutorial.gradient,
  shortDescription: tutorial.shortDescription[locale]
});

export const tutorialsByLocale: Record<Locale, TutorialListItem[]> = {
  en: tutorials.map((tutorial) => mapToListItem('en', tutorial)),
  ru: tutorials.map((tutorial) => mapToListItem('ru', tutorial))
};

export const getTutorial = (locale: Locale, slug: string): TutorialDetail | undefined => {
  const tutorial = tutorials.find((item) => item.slug === slug);

  if (!tutorial) {
    return undefined;
  }

  const base = mapToListItem(locale, tutorial);
  const localizedSnippets = (snippetsBySlug[slug] ?? fallbackSnippet(tutorial.title, locale)).map((snippet) => ({
    title: snippet.title[locale],
    code: snippet.code
  }));

  return {
    ...base,
    overview: tutorial.overview[locale],
    useCases: tutorial.useCases[locale],
    firstSteps: buildFirstSteps(locale, tutorial.title),
    deepDive: buildDeepDive(locale, tutorial),
    coreTopics: coreTopicsByCategory[locale][tutorial.category],
    roadmap: buildRoadmap(locale, tutorial),
    guidedPractice: buildGuidedPractice(locale, tutorial),
    pitfalls: buildPitfalls(locale, tutorial),
    projectIdeas: buildProjectIdeas(locale, tutorial),
    nextResources: buildNextResources(locale, tutorial),
    snippets: localizedSnippets
  };
};
