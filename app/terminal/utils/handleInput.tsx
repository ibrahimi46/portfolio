import Contact from "../components/Contact";
import About from "../components/About";
import Help from "../components/Help";
import Skills from "../components/Skills";
import { projects } from "@/lib/data/Projects";
import { ProjectCard } from "../../(gui)/projects/components/ProjectCard";

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
            <span className="text-terminal-text">
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
            <div className="text-terminal-text">
              You’re a curious visitor exploring my portfolio 👀
            </div>
          ),
        },
      ]);
      break;
    case "hire me":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <div className="text-terminal-text">sending email to Anas...</div>
          ),
        },
      ]);
      break;
    case "exit":
      window.location.href = "/";
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
            <span className="text-terminal-text">
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
    case "repo":
      window.open("https://github.com/ibrahimi46", "__blank");
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: "Opening Github...",
        },
      ]);
      break;
    case "linkedin":
      window.open("https://www.linkedin.com/in/a-ibrahimi/", "__blank");
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: "Opening Github...",
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
          output: (
            <span className="text-terminal-text">{`using vi at this time and age? not cool! try 'vim' maybe...`}</span>
          ),
        },
      ]);
      break;
    case "vim":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <span className="text-terminal-text">{`vim is so outdated. how about use 'nano'?`}</span>
          ),
        },
      ]);
      break;
    case "nano":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <span className="text-terminal-text">{`just use vscode at this point (:`}</span>
          ),
        },
      ]);
      break;
    case "cat resume":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <iframe
              src="/anas-cv.pdf"
              className="w-[550px] h-[700px] border border-zinc-800 rounded-lg"
            />
          ),
        },
      ]);
      break;
    case "ls projects":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <div className="mt-4">
              <p className="text-terminal-text text-sm mb-3">
                Available projects:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                  <ProjectCard
                    key={i}
                    project={project}
                    onHover={() => {}}
                    onLeave={() => {}}
                    index={i}
                    isHovered
                  />
                ))}
              </div>
            </div>
          ),
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
