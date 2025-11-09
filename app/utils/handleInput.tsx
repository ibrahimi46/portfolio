import Contact from "../components/terminal-components/Contact";
import About from "../components/terminal-components/About";
import Help from "../components/terminal-components/Help";
import Skills from "../components/terminal-components/Skills";

interface handleInputProps {
  command: string;
  setHistory: React.Dispatch<
    React.SetStateAction<{ command: string; output: React.ReactNode }[]>
  >;
  setInput: (value: string) => void;
}

export const handleInput = ({
  command,
  setHistory,
  setInput,
}: handleInputProps) => {
  if (!command) return;
  switch (command) {
    case "ls":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <span className="text-terminal-valid">
              bin/ &nbsp; projects/ &nbsp; hpc/ &nbsp; docs/
            </span>
          ),
        },
      ]);
      break;
    case "clear":
      setHistory([]);
      break;
    case "whoami":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <div className="text-terminal-valid">
              You’re a curious visitor exploring my portfolio 👀
            </div>
          ),
        },
      ]);
      break;
    case "sudo rm -rf":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <span className="text-terminal-invalid animate-pulse">
              💥 Permission denied. System protected by{" "}
              <span>AnasOS Firewall v2.1</span>.
              <br />
              (Nice try, pentester 🕵️‍♂️)
            </span>
          ),
        },
      ]);
      break;
    case "help":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: <Help />,
        },
      ]);
      break;
    case "date":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <span className="text-terminal-valid">
              🗓️{" "}
              {new Date().toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </span>
          ),
        },
      ]);
      break;
    case "about":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: <About />,
        },
      ]);
      break;
    case "skills":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: <Skills />,
        },
      ]);
      break;
    case "contact":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: <Contact />,
        },
      ]);
      break;
    case "resume":
      window.open(
        "https://drive.google.com/file/d/1HGrpCTHpYWUwtfdyISdIqL46qiqW21zW/view?usp=sharing",
        "__blank"
      );
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: "Opening resume...",
        },
      ]);
      break;
    case "vi":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: "Using vi at this time and age? not cool! try vim maybe...",
        },
      ]);
      break;
    default:
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <div className="text-terminal-invalid">{`shell: command not found. Try 'help' to get started.`}</div>
          ),
        },
      ]);
  }
  setInput("");
};
