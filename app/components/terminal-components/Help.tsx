const Help = () => {
  return (
    <div className="text-green-400 text-sm font-mono">
      <p className="mb-2">available commands:</p>
      <ul className="ml-4 space-y-1.5">
        <li>
          <span className="text-cyan-300">about</span> — intro & background
        </li>
        <li>
          <span className="text-cyan-300">skills</span> — tech stack & tools
        </li>
        <li>
          <span className="text-cyan-300">contact</span> — email / GitHub
        </li>
        <li>
          <span className="text-cyan-300">resume</span> — open CV (PDF)
        </li>
        <li>
          <span className="text-cyan-300">clear</span> — flush terminal
        </li>
        <li>
          <span className="text-cyan-300">date</span> — current date
        </li>
        <li>
          <span className="text-cyan-300">whoami</span> — fun identity hint 😄
        </li>
      </ul>
    </div>
  );
};

export default Help;
