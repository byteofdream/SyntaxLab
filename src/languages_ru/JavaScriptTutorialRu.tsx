const JavaScriptTutorialRu = (): JSX.Element => {
  return (
    <section>
      <h1>Основы JavaScript</h1>
      <p>JavaScript - динамический язык для веба, серверов и инструментов разработки.</p>
      <h2>Переменные</h2>
      <pre>
        <code>{`const name = 'SyntaxLab';\nlet lessons = 5;`}</code>
      </pre>
      <h2>Функции</h2>
      <pre>
        <code>{`function greet(user) {\n  return 'Привет, ' + user;\n}`}</code>
      </pre>
    </section>
  );
};

export default JavaScriptTutorialRu;
