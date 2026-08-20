import { ChevronRight, Inbox } from "lucide-react";
import type { Patient } from "@/lib/patient-queue";

/** Horizontal FRONT -> REAR view of the queue. This is the core visual. */
export function QueueVisualization({ waiting }: { waiting: Patient[] }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Current Patient Queue</h2>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          {waiting.length} {waiting.length === 1 ? "patient" : "patients"} waiting
        </span>
      </div>

      {waiting.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-12 text-center">
          <Inbox className="size-6 text-muted-foreground" />
          <p className="mt-3 font-medium">No patients are currently waiting.</p>
          <p className="text-sm text-muted-foreground">Add a patient to start the queue.</p>
        </div>
      ) : (
        <>
          <div className="mt-5 flex items-center justify-between text-xs font-semibold tracking-widest text-muted-foreground">
            <span>FRONT</span>
            <span>REAR</span>
          </div>

          <div className="mt-2 flex gap-3 overflow-x-auto pb-2">
            {waiting.map((p, i) => (
              <div key={p.id} className="flex shrink-0 items-center gap-3">
                <article
                  className={`animate-in fade-in slide-in-from-bottom-1 w-56 rounded-xl border p-4 transition-colors duration-200 ${
                    i === 0
                      ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                      : "border-border bg-background"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-primary">{p.id}</span>
                    {p.priority === "Emergency" ? (
                      <span className="rounded-full bg-emergency/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-emergency uppercase">
                        Emergency
                      </span>
                    ) : i === 0 ? (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-primary uppercase">
                        Next
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 truncate font-medium">{p.name}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Age: {p.age} · {p.gender}
                  </p>
                  <p className="text-xs text-muted-foreground">{p.department}</p>
                  <p className="mt-2 text-xs font-medium">Queue Position: {i + 1}</p>
                  <p className="text-[11px] text-muted-foreground">
                    Registered {p.registrationTime}
                  </p>
                </article>
                {i < waiting.length - 1 && (
                  <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
