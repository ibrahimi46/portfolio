const Contact = () => {
  return (
    <div className="text-green-400 text-sm font-mono">
      <p className="mb-2">📫 Reach out:</p>
      <div className="space-y-1.5">
        <div>
          📧 <span className="text-cyan-300">Email:</span>{" "}
          <a
            href="mailto:anasibrahimi4664@gmail.com"
            className="underline hover:text-cyan-200"
          >
            anasibrahimi4664@gmail.com
          </a>
        </div>
        <div>
          🐙 <span className="text-cyan-300">GitHub:</span>{" "}
          <a
            href="https://github.com/ibrahimi46"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cyan-200"
          >
            github.com/ibrahimi46
          </a>
        </div>
        <div>
          💼 <span className="text-cyan-300">LinkedIn:</span>{" "}
          <a
            href="https://linkedin.com/in/a-ibrahimi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cyan-200"
          >
            linkedin.com/in/a-ibrahimi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
