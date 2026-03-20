import { Bell, Snowflake } from "lucide-react";
import logo from "@/assets/logo.jpeg";

interface AppHeaderProps {
  name?: string;
}

const AppHeader = ({ name = "Användare" }: AppHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-1 pt-2 pb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40">
          <img src={logo} alt="Profil" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">God dag 👋</p>
          <p className="font-semibold text-foreground">{name}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
          <Snowflake className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">4</span>
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
