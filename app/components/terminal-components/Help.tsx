const Help = () => {
  return (
    <div className="text-terminal-text">
      <p className="mb-2">available commands:</p>
      <ul className="ml-4 space-y-1.5">
        <li>
          <span className="text-terminal-input">about</span> — intro &
          background
        </li>
        <li>
          <span className="text-terminal-input">skills</span> — tech stack &
          tools
        </li>
        <li>
          <span className="text-terminal-input">contact</span> — email / GitHub
        </li>
        <li>
          <span className="text-terminal-input">resume</span> — open my CV (PDF)
        </li>
        <li>
          <span className="text-terminal-input">cat resume</span> — open my CV
          preview
        </li>
        <li>
          <span className="text-terminal-input">ls projects</span> — quick
          preview of my recent projects
        </li>
        <li>
          <span className="text-terminal-input">repo</span> — open my github
        </li>
        <li>
          <span className="text-terminal-input">linkedin</span> — open my
          linkedin
        </li>
        <li>
          <span className="text-terminal-input">hire me</span> — hire me 😁
        </li>
        <li>
          <span className="text-terminal-input">clear</span> — flush terminal
        </li>
        <li>
          <span className="text-terminal-input">date</span> — current date
        </li>
        <li>
          <span className="text-terminal-input">whoami</span> — fun identity
          hint
        </li>
        <li>
          <span className="text-terminal-input">vi</span> — vi text editor
        </li>
      </ul>
    </div>
  );
};

export default Help;
