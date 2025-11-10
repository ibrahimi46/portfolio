interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard = ({ title, description }: SkillCardProps) => {
  return (
    <div className="p-4 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer">
      <h1 className="text-2xl font-semibold mb-2 text-white">{title}</h1>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;
