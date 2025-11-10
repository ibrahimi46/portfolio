interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all ${
        active
          ? "bg-white text-black"
          : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
