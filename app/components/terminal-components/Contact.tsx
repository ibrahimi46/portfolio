import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-terminal-text">
      <p className="mb-2">Say Hello,</p>
      <div className="space-y-1.5">
        <div className="flex gap-2 items-center">
          <FaEnvelope color="white" />
          <span className="text-terminal-input">Email:</span>{" "}
          <a
            href="mailto:anasibrahimi4664@gmail.com"
            className="underline hover:opacity-90"
          >
            anasibrahimi4664@gmail.com
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <FaGithub color="white" />
          <span className="text-terminal-input">GitHub:</span>{" "}
          <a
            href="https://github.com/ibrahimi46"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-90"
          >
            github.com/ibrahimi46
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <FaLinkedin color="white" />
          <span className="text-terminal-input">LinkedIn:</span>{" "}
          <a
            href="https://linkedin.com/in/a-ibrahimi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-90"
          >
            linkedin.com/in/a-ibrahimi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
