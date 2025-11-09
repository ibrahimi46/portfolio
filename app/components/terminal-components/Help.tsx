const Help = () => {
  return (
    <div className="text-terminal-valid">
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
          <span className="text-terminal-input">resume</span> — open CV (PDF)
        </li>
        <li>
          <span className="text-terminal-input">clear</span> — flush terminal
        </li>
        <li>
          <span className="text-terminal-input">date</span> — current date
        </li>
        <li>
          <span className="text-terminal-input">whoami</span> — fun identity
          hint 😄
        </li>
      </ul>
    </div>
  );
};

export default Help;
