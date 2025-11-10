interface ProgressBarProps {
  value: number;
  className?: string;
}

export function ProgressBar({ value, className = "" }: ProgressBarProps) {
  return (
    <div
      className={`w-full bg-white/10 rounded-full overflow-hidden ${className}`}
    >
      <div
        className="bg-white h-full transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
