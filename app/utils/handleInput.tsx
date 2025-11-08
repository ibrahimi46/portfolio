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
        { command: command, output: "/home /usr /bin" },
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
          output: "Nice try... 😂",
        },
      ]);
      break;
    case "help":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: "about contact projects resume skills date",
        },
      ]);
      break;
    case "date":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: <p>{new Date().toLocaleDateString()}</p>,
        },
      ]);
      break;
    case "about":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output:
            "I am Anas Ibrahimi, a full stack developer based in Jeddah, Saudi Arabia.",
        },
      ]);
      break;
    case "skills":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: "💻 React ⚡ Next.js 🎨 Tailwind 🔧 TypeScript 🧠 Node.js",
        },
      ]);
      break;
    case "contact":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output:
            "📧 Email: anasibrahimi4664@gmail.com, 🐙 GitHub: https://github.com/ibrahimi46",
        },
      ]);
      break;
    case "resume":
      setHistory((prev) => [
        ...prev,
        {
          command: command,
          output: (
            <span>
              📄 You can view my resume here:{" "}
              <a
                href="https://drive.google.com/file/d/1HGrpCTHpYWUwtfdyISdIqL46qiqW21zW/view?usp=share_link"
                target="_blank"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Open Resume ↗
              </a>
            </span>
          ),
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
