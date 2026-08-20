import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Patient } from "@/lib/patient-queue";

interface Props {
  waiting: Patient[];
  served: Patient[];
}

/**
 * Read-only search. It never reorders or modifies the queue —
 * it only looks up patients by ID, name or department.
 */
export function PatientSearch({ waiting, served }: Props) {
  const [term, setTerm] = useState("");
  const q = term.trim().toLowerCase();

  const results = q
    ? [
        ...waiting.map((p, i) => ({ patient: p, status: "Waiting" as const, position: i + 1 })),
        ...served.map((p) => ({ patient: p, status: "Served" as const, position: 0 })),
      ].filter(
        ({ patient }) =>
          patient.id.toLowerCase().includes(q) ||
          patient.name.toLowerCase().includes(q) ||
          patient.department.toLowerCase().includes(q),
      )
    : [];

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Search Patients</h2>
      <div className="relative mt-3">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search by patient ID, name or department"
          className="pl-9"
          maxLength={40}
        />
      </div>

      {q && (
        <div className="mt-4 space-y-2">
          {results.length === 0 ? (
            <p className="text-sm text-muted-foreground">No patient found for “{term}”.</p>
          ) : (
            results.map(({ patient, status, position }) => (
              <div
                key={`${patient.id}-${status}`}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-border bg-background p-3 text-sm"
              >
                <span className="font-mono font-semibold text-primary">{patient.id}</span>
                <span className="font-medium">{patient.name}</span>
                <span className="text-muted-foreground">{patient.department}</span>
                <span className="ml-auto flex items-center gap-2">
                  {status === "Waiting" && (
                    <span className="text-xs text-muted-foreground">Position: {position}</span>
                  )}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      status === "Waiting"
                        ? "bg-primary/10 text-primary"
                        : "bg-success/10 text-success"
                    }`}
                  >
                    {status}
                  </span>
                </span>
              </div>
            ))
          )}
          <p className="pt-1 text-xs text-muted-foreground">
            Searching only filters this result list — the queue order stays unchanged.
          </p>
        </div>
      )}
    </section>
  );
}
