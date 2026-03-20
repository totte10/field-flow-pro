import { Briefcase, MapPin, Clock } from "lucide-react";

interface JobCardProps {
  title: string;
  address: string;
  status: "pending" | "active" | "done";
  time?: string;
}

const statusColors = {
  pending: "bg-warning/20 text-warning",
  active: "bg-info/20 text-info",
  done: "bg-success/20 text-success",
};

const statusLabels = {
  pending: "Väntande",
  active: "Aktiv",
  done: "Klar",
};

const JobCard = ({ title, address, status, time }: JobCardProps) => {
  return (
    <div className="glass-card p-4 flex items-start gap-3 transition-all active:scale-[0.98]">
      <div className="w-10 h-10 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0 mt-0.5">
        <Briefcase className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-foreground truncate">{title}</h4>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span className="truncate">{address}</span>
        </div>
        {time && (
          <div className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{time}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
