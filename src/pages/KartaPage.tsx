import AppLayout from "@/components/AppLayout";
import { MapPin, Layers } from "lucide-react";

const KartaPage = () => {
  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Karta</h1>
          <p className="text-sm text-muted-foreground">Jobb & områden</p>
        </div>
        <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground">
          <Layers className="w-5 h-5" />
        </button>
      </div>

      {/* Map placeholder */}
      <div className="glass-card rounded-2xl overflow-hidden mb-4 aspect-[4/3] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background opacity-80" />
        <div className="relative text-center">
          <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Karta laddas...</p>
          <p className="text-xs text-muted-foreground mt-1">Google Maps API krävs</p>
        </div>
      </div>

      {/* Job markers list */}
      <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-3">Jobb på kartan</p>
      <div className="space-y-2">
        {[
          { title: "Snöröjning Centrum", address: "Storgatan 12", color: "text-info" },
          { title: "Sopning Västra", address: "Industrivägen 5", color: "text-warning" },
          { title: "Salt Parkering", address: "Amiralsgatan 24", color: "text-success" },
        ].map((job) => (
          <div key={job.title} className="glass-card p-3 flex items-center gap-3">
            <MapPin className={`w-4 h-4 ${job.color} flex-shrink-0`} />
            <div>
              <p className="text-sm font-medium text-foreground">{job.title}</p>
              <p className="text-xs text-muted-foreground">{job.address}</p>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default KartaPage;
