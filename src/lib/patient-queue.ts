/**
 * Queue Data Structure (FIFO) — TypeScript mirror of the C++ implementation
 * found in `src/dsa/PatientQueue.cpp`.
 *
 * The browser cannot execute C++, so this class reproduces exactly the same
 * logic (same operations, same complexity) so the UI behaves like the C++ code.
 */

export type Priority = "Normal" | "Emergency";
export type PatientStatus = "Waiting" | "Served";

export interface Patient {
  id: string; // e.g. "P001"
  name: string;
  age: number;
  gender: string;
  department: string;
  priority: Priority;
  registrationTime: string; // human readable time
  status: PatientStatus;
}

/** A simple FIFO queue — same operations as the C++ PatientQueue class. */
export class PatientQueue {
  private items: Patient[];

  constructor(initial: Patient[] = []) {
    this.items = [...initial];
  }

  /** ENQUEUE — add a patient at the REAR. O(1) */
  enqueue(patient: Patient): void {
    this.items.push(patient);
  }

  /** DEQUEUE — remove and return the patient at the FRONT. O(1) */
  dequeue(): Patient | null {
    if (this.isEmpty()) return null;
    return this.items.shift() ?? null;
  }

  /** PEEK / FRONT — look at the front patient without removing them. O(1) */
  peek(): Patient | null {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  /** ISEMPTY — is the queue empty? O(1) */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /** SIZE — number of waiting patients. O(1) */
  size(): number {
    return this.items.length;
  }

  /** Remove every waiting patient. */
  clear(): void {
    this.items = [];
  }

  /** Read-only snapshot of the queue, FRONT -> REAR. */
  toArray(): Patient[] {
    return [...this.items];
  }
}
