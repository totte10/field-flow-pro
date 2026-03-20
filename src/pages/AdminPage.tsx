import AppLayout from "@/components/AppLayout";
import { Users, Briefcase, Clock, Download, ChevronRight, Snowflake, Wind } from "lucide-react";

const AdminPage = () => {
  const stats = [
    { label: "Aktiva jobb", value: "12", icon: Briefcase, color: "text-primary" },
    { label: "Anställda", value: "8", icon: Users, color: "text-info" },
    { label: "Timmar idag", value: "34h", icon: Clock, color: "text-success" },
  ];

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Admin</h1>
        <p className="text-sm text-muted-foreground">Översikt & hantering</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="glass-card p-3 text-center">
              <Icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Season toggle */}
      <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-3">Säsongsläge</p>
      <div className="grid grid-cols-2 gap-2 mb-6">
        <button className="glass-card p-4 flex flex-col items-center gap-2 border-primary/50">
          <Snowflake className="w-6 h-6 text-info" />
          <span className="text-sm font-semibold text-foreground">Vinter ❄️</span>
          <span className="text-[10px] text-muted-foreground">Snöröjning</span>
        </button>
        <button className="glass-card p-4 flex flex-col items-center gap-2 opacity-50">
          <Wind className="w-6 h-6 text-success" />
          <span className="text-sm font-semibold text-foreground">Sopning 🧹</span>
          <span className="text-[10px] text-muted-foreground">Gatusopning</span>
        </button>
      </div>

      {/* Quick actions */}
      <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-3">Snabbåtgärder</p>
      <div className="space-y-2">
        {[
          { label: "Hantera anställda", sub: "Tilldela & administrera" },
          { label: "Jobbstatus", sub: "Översikt alla jobb" },
          { label: "Exportera data", sub: "Fortnox-format" },
        ].map((item) => (
          <button key={item.label} className="glass-card w-full p-4 flex items-center justify-between active:scale-[0.98] transition-transform">
            <div className="text-left">
              <p className="font-medium text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>
    </AppLayout>
  );
};

export default AdminPage;
