import cppSource from "@/dsa/PatientQueue.cpp?raw";

const operations = [
  {
    name: "Enqueue",
    desc: "Adds a new patient to the REAR of the queue (patient registration).",
  },
  { name: "Dequeue", desc: "Removes the patient at the FRONT (Serve Next Patient)." },
  { name: "Peek / Front", desc: "Shows the front patient without removing them." },
  { name: "isEmpty", desc: "Checks whether any patient is waiting." },
  { name: "Size", desc: "Returns how many patients are currently waiting." },
];

const complexity = [
  ["Enqueue", "O(1)"],
  ["Dequeue", "O(1)"],
  ["Peek", "O(1)"],
  ["isEmpty", "O(1)"],
  ["Size", "O(1)"],
];

export function HowQueueWorks() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">How the Queue Works</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        A queue is a linear data structure that follows <strong>FIFO — First In, First Out</strong>
        . The first patient who enters the queue is the first patient who gets served, exactly like
        a real hospital waiting line.
      </p>

      <pre className="mt-4 overflow-x-auto rounded-xl bg-surface p-4 font-mono text-xs text-muted-foreground">
        {`FRONT                                   REAR
  P001  ->  P002  ->  P003  ->  P004
   ^                              ^
 dequeue (served here)        enqueue (joins here)`}
      </pre>

      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {operations.map((op) => (
          <li key={op.name} className="rounded-xl border border-border bg-background p-4">
            <p className="font-mono text-sm font-semibold text-primary">{op.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{op.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CppImplementation() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">C++ Queue Implementation</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        The DSA logic of this project, written in C++ (<code className="font-mono">
          src/dsa/PatientQueue.cpp
        </code>). The browser cannot run C++, so the interface above uses a TypeScript class that
        mirrors these exact operations.
      </p>
      <pre className="mt-4 max-h-[28rem] overflow-auto rounded-xl bg-surface p-4 font-mono text-xs leading-relaxed">
        <code>{cppSource}</code>
      </pre>
    </section>
  );
}

export function ComplexityTable() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Time Complexity</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs tracking-wide text-muted-foreground uppercase">
              <th className="py-2 font-medium">Operation</th>
              <th className="py-2 font-medium">Complexity</th>
            </tr>
          </thead>
          <tbody>
            {complexity.map(([op, big]) => (
              <tr key={op} className="border-b border-border/60 last:border-0">
                <td className="py-2.5">{op}</td>
                <td className="py-2.5 font-mono text-primary">{big}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        All operations are constant time because the queue only touches its two ends: enqueue writes
        at the <strong>rear</strong> index and dequeue reads at the <strong>front</strong> index. No
        loop or shifting of the other patients is needed, so the cost does not grow with the number
        of patients waiting.
      </p>
    </section>
  );
}
