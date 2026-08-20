import { useCallback, useEffect, useState } from "react";
import { PatientQueue, type Patient } from "@/lib/patient-queue";

const STORAGE_KEY = "hpqms-state-v1";

interface StoredState {
  waiting: Patient[];
  served: Patient[];
  totalRegistered: number;
  totalServed: number;
  counter: number; // last used patient number (P001 -> 1)
}

const emptyState: StoredState = {
  waiting: [],
  served: [],
  totalRegistered: 0,
  totalServed: 0,
  counter: 0,
};

function loadState(): StoredState {
  if (typeof window === "undefined") return emptyState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState;
    return { ...emptyState, ...(JSON.parse(raw) as Partial<StoredState>) };
  } catch {
    return emptyState;
  }
}

export interface NewPatientInput {
  name: string;
  age: number;
  gender: string;
  department: string;
  priority: Patient["priority"];
  id?: string;
}

/**
 * Owns the application state and drives the Queue data structure.
 * Every UI action maps directly to a queue operation.
 */
export function usePatientQueue() {
  const [state, setState] = useState<StoredState>(emptyState);
  const [hydrated, setHydrated] = useState(false);

  // Load saved data on first render (client only).
  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  // Persist after every change.
  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const queue = new PatientQueue(state.waiting);

  const nextId = useCallback(
    () => `P${String(state.counter + 1).padStart(3, "0")}`,
    [state.counter],
  );

  /** ENQUEUE */
  const addPatient = useCallback((input: NewPatientInput): Patient | null => {
    let created: Patient | null = null;
    setState((prev) => {
      const id = input.id?.trim() || `P${String(prev.counter + 1).padStart(3, "0")}`;
      const exists = [...prev.waiting, ...prev.served].some((p) => p.id === id);
      if (exists) return prev; // duplicate ids are rejected

      const patient: Patient = {
        id,
        name: input.name.trim(),
        age: input.age,
        gender: input.gender,
        department: input.department,
        priority: input.priority,
        registrationTime: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "Waiting",
      };
      created = patient;

      const q = new PatientQueue(prev.waiting);
      q.enqueue(patient); // <-- ENQUEUE at the REAR

      return {
        ...prev,
        waiting: q.toArray(),
        counter: prev.counter + 1,
        totalRegistered: prev.totalRegistered + 1,
      };
    });
    return created;
  }, []);

  /** DEQUEUE */
  const serveNext = useCallback((): Patient | null => {
    let servedPatient: Patient | null = null;
    setState((prev) => {
      const q = new PatientQueue(prev.waiting);
      if (q.isEmpty()) return prev; // Rule 7: never crash on empty queue
      const patient = q.dequeue(); // <-- DEQUEUE from the FRONT
      if (!patient) return prev;
      servedPatient = patient;
      return {
        ...prev,
        waiting: q.toArray(),
        served: [{ ...patient, status: "Served" }, ...prev.served],
        totalServed: prev.totalServed + 1,
      };
    });
    return servedPatient;
  }, []);

  /** Removes only the waiting patients, history is kept. */
  const clearQueue = useCallback(() => {
    setState((prev) => ({ ...prev, waiting: [] }));
  }, []);

  /** Wipes everything, including history and the ID counter. */
  const clearAll = useCallback(() => setState(emptyState), []);

  const isDuplicateId = useCallback(
    (id: string) => [...state.waiting, ...state.served].some((p) => p.id === id.trim()),
    [state.waiting, state.served],
  );

  return {
    hydrated,
    waiting: state.waiting,
    served: state.served,
    totalRegistered: state.totalRegistered,
    totalServed: state.totalServed,
    size: queue.size(),
    isEmpty: queue.isEmpty(),
    front: queue.peek(), // PEEK
    addPatient,
    serveNext,
    clearQueue,
    clearAll,
    nextId,
    isDuplicateId,
  };
}
