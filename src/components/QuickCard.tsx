import { ReactNode } from "react";

interface QuickCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  variant?: "default" | "highlight";
  onClick?: () => void;
}

const QuickCard = ({ icon, title, subtitle, variant = "default", onClick }: QuickCardProps) => {
  if (variant === "highlight") {
    return (
      <button
        onClick={onClick}
        className="w-full gradient-orange rounded-2xl p-5 text-left transition-transform active:scale-[0.98] group"
      >
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
            {icon}
          </div>
          <svg className="w-5 h-5 text-primary-foreground/70 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
        <h3 className="text-lg font-bold text-primary-foreground mt-4">{title}</h3>
        <p className="text-sm text-primary-foreground/70">{subtitle}</p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="glass-card p-4 text-left transition-all active:scale-[0.97] hover:border-primary/30"
    >
      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
    </button>
  );
};

export default QuickCard;
