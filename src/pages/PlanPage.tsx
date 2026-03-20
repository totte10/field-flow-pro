import AppLayout from "@/components/AppLayout";
import JobCard from "@/components/JobCard";
import { CalendarDays, Plus } from "lucide-react";

const PlanPage = () => {
  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Planering</h1>
          <p className="text-sm text-muted-foreground">Vecka 12 · Mars 2026</p>
        </div>
        <button className="w-10 h-10 rounded-xl gradient-orange flex items-center justify-center">
          <Plus className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>

      {/* Week strip */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"].map((day, i) => {
          const isToday = i === 2;
          return (
            <button
              key={day}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl min-w-[48px] transition-all ${
                isToday ? "gradient-orange text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-[10px] font-medium">{day}</span>
              <span className="text-sm font-bold">{17 + i}</span>
            </button>
          );
        })}
      </div>

      <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-3">Dagens jobb</p>
      <div className="space-y-2">
        <JobCard title="Snöröjning Centrum" address="Storgatan 12, Malmö" status="active" time="08:00 - 12:00" />
        <JobCard title="Sopning Söder" address="Södra Förstadsg. 3" status="pending" time="13:00 - 15:00" />
        <JobCard title="Salt Parkering A" address="Amiralsgatan 24" status="pending" time="15:30 - 17:00" />
      </div>
    </AppLayout>
  );
};

export default PlanPage;
