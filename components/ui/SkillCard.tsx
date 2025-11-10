interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard = ({ title, description }: SkillCardProps) => {
  return (
    <div className="p-4 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all cursor-pointer">
      <h1 className="text-md sm:text-lg md:text-xl font-semibold mb-2 text-white">
        {title}
      </h1>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;
