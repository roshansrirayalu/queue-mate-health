import type { Patient } from "@/lib/patient-queue";

/** Patients removed from the FRONT of the queue by dequeue(). */
export function ServedHistory({ served }: { served: Patient[] }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Served Patients History</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Every dequeued patient is stored here — most recent first.
      </p>

      {served.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">No patients have been served yet.</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs tracking-wide text-muted-foreground uppercase">
                <th className="py-2 pr-4 font-medium">Patient ID</th>
                <th className="py-2 pr-4 font-medium">Name</th>
                <th className="py-2 pr-4 font-medium">Department</th>
                <th className="py-2 pr-4 font-medium">Time</th>
                <th className="py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {served.map((p) => (
                <tr key={p.id} className="border-b border-border/60 last:border-0">
                  <td className="py-2.5 pr-4 font-mono text-primary">{p.id}</td>
                  <td className="py-2.5 pr-4">{p.name}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{p.department}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{p.registrationTime}</td>
                  <td className="py-2.5">
                    <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                      Served
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
