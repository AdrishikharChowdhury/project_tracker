interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-amber-800 border border-amber-700/50 rounded-2xl p-6 flex flex-col gap-3 hover:bg-amber-800/90 transition-colors">
      <h3 className="text-lg font-bold text-amber-300">{title}</h3>
      <p className="text-amber-100/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;
