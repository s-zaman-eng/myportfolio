interface SkillCardProps {
  title: string;
  skills: string;
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-sm">
      <h4 className="font-serif font-bold text-lg mb-3 text-primary">{title}</h4>
      <p>{skills}</p>
    </div>
  );
};

export default SkillCard;
