"use client";
import { useEffect, useRef, useState } from "react";
import { handleInput } from "../utils/handleInput";

const mockHistory = [{ command: "pwd", output: "/anas-portfolio" }];

const Terminal = () => {
  const [history, setHistory] = useState<
    { command: string; output: React.ReactNode }[]
  >([]);
  const [bootHistory, setBootHistory] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [bootComplete, setBootComplete] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const bootMessages = [
    "⚙️ Loading modules...",
    "📦 Installing dependencies...",
    "🧠 Initializing terminal...",
    "✅ System ready.",
    "💡 Type 'help' to see available commands.",
  ];

  useEffect(() => {
    bootMessages.forEach((msg, idx) => {
      setTimeout(() => {
        setBootHistory((prev) => [...prev, msg]);

        // check if last message
        if (idx === bootMessages.length - 1) {
          setTimeout(() => setBootComplete(true), 1000);
        }
      }, idx * 1200);
    });
  }, []);

  useEffect(() => {
    if (bootComplete) inputRef.current?.focus();
  });

  return (
    <div
      className="bg-black/40 text-light p-4 mt-14 rounded-lg
      w-[90vw] sm:w-[80vw] md:w-[70vw] max-w-[800px]
      h-[80vh] sm:h-[75vh] md:h-[70vh] max-h-[600px]
      border-[0.5px] border-light/10 shadow-sm
      text-sm
      "
    >
      {bootHistory.length > 0 &&
        bootHistory.map((bootMsg, idx) => {
          return (
            <p key={idx} className="text-green-700">
              {bootMsg}
            </p>
          );
        })}

      {history.length > 0 &&
        history.map((history, idx) => {
          return (
            <div key={idx}>
              <div className="flex gap-2">
                <span className="text-blue-400 cursor-default">
                  @anas-portfolio-$
                </span>
                <p>{history.command}</p>
              </div>
              <div>{history.output}</div>
            </div>
          );
        })}

      {bootComplete && (
        <div className="flex gap-2">
          <div className="cursor-default text-blue-400">@anas-portfolio-$</div>
          {/** Input box */}
          <div>
            <span
              className={`${
                input.length > 0 ? "hidden" : "animate-pulse"
              } cursor-default`}
            >
              |
            </span>
            <input
              type="text"
              value={input}
              className="bg-inherit outline-none caret-transparent cursor-default"
              ref={inputRef}
              onChange={(e) => {
                setInput(e.target.value);
                setIsTyping(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (bootHistory.length > 0) setBootHistory([]);
                  handleInput({ command: input, setHistory, setInput });
                  setIsTyping(false);
                }
              }}
              onBlur={() => inputRef.current?.focus()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Terminal;
