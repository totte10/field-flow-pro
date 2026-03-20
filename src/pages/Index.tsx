import AppLayout from "@/components/AppLayout";
import AppHeader from "@/components/AppHeader";
import QuickCard from "@/components/QuickCard";
import JobCard from "@/components/JobCard";
import { Route, CalendarDays, Map, Bot, FolderOpen, Clock, Home, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <AppHeader name="Christoffer" />

      {/* Section: Snabbstart */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-3">Snabbstart</p>
        <QuickCard
          variant="highlight"
          icon={<Route className="w-5 h-5 text-primary-foreground" />}
          title="Ruttplanering"
          subtitle="Optimera & navigera"
          onClick={() => navigate("/plan")}
        />
      </div>

      {/* Grid cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <QuickCard
          icon={<CalendarDays className="w-5 h-5 text-info" />}
          title="Planering"
          subtitle="Schemalägg"
          onClick={() => navigate("/plan")}
        />
        <QuickCard
          icon={<Map className="w-5 h-5 text-success" />}
          title="Karta"
          subtitle="Områden"
          onClick={() => navigate("/karta")}
        />
        <QuickCard
          icon={<Bot className="w-5 h-5 text-accent" />}
          title="AI Assistent"
          subtitle="Fråga AI"
          onClick={() => navigate("/ai")}
        />
        <QuickCard
          icon={<FolderOpen className="w-5 h-5 text-warning" />}
          title="Projekt"
          subtitle="Alla projekt"
          onClick={() => navigate("/admin")}
        />
      </div>

      {/* Section: Mer */}
      <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-3">Mer</p>
      <div className="space-y-2 mb-6">
        <button onClick={() => navigate("/plan")} className="glass-card w-full p-4 flex items-center justify-between active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-info/15 flex items-center justify-center">
              <Clock className="w-4 h-4 text-info" />
            </div>
            <span className="font-medium text-foreground">Tidrapport</span>
          </div>
          <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
        <button onClick={() => navigate("/karta")} className="glass-card w-full p-4 flex items-center justify-between active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-success/15 flex items-center justify-center">
              <Home className="w-4 h-4 text-success" />
            </div>
            <span className="font-medium text-foreground">Egna Områden</span>
          </div>
          <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
        <button className="glass-card w-full p-4 flex items-center justify-between active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center">
              <Zap className="w-4 h-4 text-accent" />
            </div>
            <span className="font-medium text-foreground">Optimera</span>
          </div>
          <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Active jobs */}
      <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-3">Aktiva jobb</p>
      <div className="space-y-2">
        <JobCard title="Snöröjning Centrum" address="Storgatan 12, Malmö" status="active" time="08:00 - 12:00" />
        <JobCard title="Sopning Västra" address="Industrivägen 5, Lund" status="pending" time="13:00 - 16:00" />
        <JobCard title="Snöröjning Norr" address="Norra Vallgatan 8" status="done" time="06:00 - 08:00" />
      </div>
    </AppLayout>
  );
};

export default Index;
