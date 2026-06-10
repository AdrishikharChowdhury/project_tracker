interface HighlightsProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Highlights = ({ icon, title, description }: HighlightsProps) => {
  const Icon = icon;
  return (
    <div className="bg-amber-800 border border-amber-700/50 rounded-2xl p-5 flex flex-col gap-3 hover:bg-amber-800/90 transition-colors">
      <div className="p-2.5 bg-amber-700/50 rounded-xl w-fit">
        <Icon className="w-5 h-5 text-amber-300" />
      </div>
      <h3 className="text-base font-bold text-white">{title}</h3>
      <p className="text-amber-100/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Highlights;
