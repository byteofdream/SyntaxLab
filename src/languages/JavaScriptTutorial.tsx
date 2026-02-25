const JavaScriptTutorial = (): JSX.Element => {
  return (
    <section>
      <h1>JavaScript Basics</h1>
      <p>JavaScript is a dynamic language used for web, server, and tooling development.</p>
      <h2>Variables</h2>
      <pre>
        <code>{`const name = 'SyntaxLab';\nlet lessons = 5;`}</code>
      </pre>
      <h2>Functions</h2>
      <pre>
        <code>{`function greet(user: string) {\n  return 'Hello, ' + user;\n}`}</code>
      </pre>
    </section>
  );
};

export default JavaScriptTutorial;
