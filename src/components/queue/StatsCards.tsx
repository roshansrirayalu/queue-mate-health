import { Users, UserCheck, ArrowRight, ClipboardCheck } from "lucide-react";
import type { Patient } from "@/lib/patient-queue";

interface Props {
  waiting: Patient[];
  totalServed: number;
}

/** Four small dashboard cards derived directly from the queue state. */
export function StatsCards({ waiting, totalServed }: Props) {
  const current = waiting[0];
  const next = waiting[1];

  const cards = [
    {
      label: "Total Waiting",
      value: String(waiting.length),
      hint: "queue.size()",
      icon: Users,
    },
    {
      label: "Current Patient",
      value: current ? current.id : "—",
      hint: current ? current.name : "queue.peek()",
      icon: UserCheck,
    },
    {
      label: "Next Patient",
      value: next ? next.id : "—",
      hint: next ? next.name : "no one after front",
      icon: ArrowRight,
    },
    {
      label: "Patients Served",
      value: String(totalServed),
      hint: "total dequeues",
      icon: ClipboardCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">{c.label}</p>
            <c.icon className="size-4 text-primary" />
          </div>
          <p className="mt-3 text-3xl font-semibold tracking-tight">{c.value}</p>
          <p className="mt-1 truncate text-xs text-muted-foreground">{c.hint}</p>
        </div>
      ))}
    </div>
  );
}
