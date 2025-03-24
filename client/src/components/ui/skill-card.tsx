interface SkillCardProps {
  title: string;
  skills: string;
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="bg-[#E5E5E5] p-6 rounded-lg">
      <h4 className="font-serif font-bold text-lg mb-3 text-[#14213D]">{title}</h4>
      <p>{skills}</p>
    </div>
  );
};

export default SkillCard;
