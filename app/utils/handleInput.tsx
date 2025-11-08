import Contact from "../components/terminal-components/Contact";
import About from "../components/terminal-components/About";
import Help from "../components/terminal-components/Help";
import Skills from "../components/terminal-components/Skills";
import Resume from "../components/terminal-components/Resume";

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
            <span className="text-green-400 text-sm font-mono">
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
          output: "You’re a curious visitor exploring my portfolio 👀",
        },
      ]);
      break;
    case "sudo rm -rf":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <span className="text-red-400 text-sm font-mono animate-pulse">
              💥 Permission denied. System protected by{" "}
              <span className="text-cyan-300">AnasOS Firewall v2.1</span>.
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
            <span className="text-green-400 text-sm font-mono">
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
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: <Resume />,
        },
      ]);
      break;
    default:
      setHistory((prev) => [
        ...prev,
        { command: command, output: "type help to see available options..." },
      ]);
  }
  setInput("");
};
