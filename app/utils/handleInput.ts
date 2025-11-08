interface handleInputProps {
    command: string
    setHistory: React.Dispatch<React.SetStateAction<{ command: string; output: string }[]>>
    setInput: (value: string) => void
}

export const handleInput = ({command, setHistory, setInput} : handleInputProps) => {
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
      default:
        setHistory((prev) => [
          ...prev,
          { command: command, output: "type help to see available options..." },
        ]);
    }
    setInput("");
  };