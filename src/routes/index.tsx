import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Activity, Stethoscope } from "lucide-react";
import { toast } from "sonner";

import { usePatientQueue, type NewPatientInput } from "@/hooks/use-patient-queue";
import { StatsCards } from "@/components/queue/StatsCards";
import { RegisterForm } from "@/components/queue/RegisterForm";
import { QueueVisualization } from "@/components/queue/QueueVisualization";
import { QueueOperations } from "@/components/queue/QueueOperations";
import { ServedHistory } from "@/components/queue/ServedHistory";
import { PatientSearch } from "@/components/queue/PatientSearch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hospital Patient Queue Management System | DSA Queue Project" },
      {
        name: "description",
        content:
          "A queue data structure based patient management system: register patients (enqueue), serve them FIFO (dequeue) and see the C++ queue implementation.",
      },
      { property: "og:title", content: "Hospital Patient Queue Management System" },
      {
        property: "og:description",
        content:
          "FIFO queue demo for a college DSA project: enqueue, dequeue, peek and isEmpty with a C++ reference implementation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const q = usePatientQueue();
  const formRef = useRef<HTMLDivElement>(null);

  function handleAdd(input: NewPatientInput) {
    const created = q.addPatient(input);
    if (created) toast.success(`Patient ${created.id} added to queue successfully.`);
    else toast.error("Patient ID already exists.");
  }

  function handleServe() {
    if (q.isEmpty) {
      toast.error("Queue is empty. No patient to serve.");
      return;
    }
    const served = q.serveNext();
    if (served) toast.success(`Patient ${served.id} has been served.`);
  }

  function handlePeek() {
    const front = q.front;
    if (!front) {
      toast.error("Queue is empty. No patient to view.");
      return;
    }
    toast(`Next patient: ${front.id} — ${front.name}`, {
      description: `${front.department} · Age ${front.age} · not removed from the queue`,
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="rounded-xl bg-primary/10 p-2.5 text-primary">
                <Stethoscope className="size-6" />
              </span>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Hospital Patient Queue Management System
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Manage patients using the FIFO Queue Data Structure
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              <Activity className="size-3.5" />
              System Status: Active
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        <StatsCards waiting={q.waiting} totalServed={q.totalServed} />

        <div ref={formRef}>
          <RegisterForm
            nextId={q.nextId()}
            isDuplicateId={q.isDuplicateId}
            onSubmit={handleAdd}
          />
        </div>

        <QueueVisualization waiting={q.waiting} />

        <QueueOperations
          onAdd={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
          onServe={handleServe}
          onPeek={handlePeek}
          onClearQueue={() => {
            q.clearQueue();
            toast.success("Queue cleared successfully.");
          }}
          onClearAll={() => {
            q.clearAll();
            toast.success("All patient data deleted.");
          }}
        />

        <PatientSearch waiting={q.waiting} served={q.served} />
        <ServedHistory served={q.served} />
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm sm:px-6">
          <p className="font-medium">Hospital Patient Queue Management System</p>
          <p className="mt-1 text-muted-foreground">
            DSA Project — Queue Implementation using C++
          </p>
        </div>
      </footer>
    </div>
  );
}
