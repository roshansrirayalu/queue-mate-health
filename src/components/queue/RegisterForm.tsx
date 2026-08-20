import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { NewPatientInput } from "@/hooks/use-patient-queue";
import type { Priority } from "@/lib/patient-queue";

export const DEPARTMENTS = [
  "General Medicine",
  "Cardiology",
  "Orthopedics",
  "Pediatrics",
  "Emergency",
];

interface Props {
  nextId: string;
  isDuplicateId: (id: string) => boolean;
  onSubmit: (input: NewPatientInput) => void;
}

/** "Register New Patient" form — submitting performs an ENQUEUE. */
export function RegisterForm({ nextId, isDuplicateId, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [department, setDepartment] = useState(DEPARTMENTS[0] as string);
  const [priority, setPriority] = useState<Priority>("Normal");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectClass =
    "h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next["name"] = "Patient name cannot be empty.";
    const ageNum = Number(age);
    if (!age.trim() || Number.isNaN(ageNum) || ageNum <= 0 || ageNum > 120)
      next["age"] = "Age must be a valid number (1-120).";
    if (!department) next["department"] = "Department must be selected.";
    const finalId = id.trim() || nextId;
    if (isDuplicateId(finalId)) next["id"] = `Patient ID ${finalId} already exists.`;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    onSubmit({ name, age: ageNum, gender, department, priority, id: finalId });
    setName("");
    setId("");
    setAge("");
    setPriority("Normal");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold">Register New Patient</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Submitting this form calls <code className="font-mono">enqueue()</code> — the patient
        joins at the REAR of the queue.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Patient Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Rahul Kumar"
            maxLength={60}
          />
          {errors["name"] && <p className="text-xs text-destructive">{errors["name"]}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="pid">Patient ID</Label>
          <Input
            id="pid"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder={`${nextId} (auto)`}
            maxLength={12}
          />
          {errors["id"] && <p className="text-xs text-destructive">{errors["id"]}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            inputMode="numeric"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="21"
          />
          {errors["age"] && <p className="text-xs text-destructive">{errors["age"]}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="gender">Gender</Label>
          <select
            id="gender"
            className={selectClass}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="dept">Department</Label>
          <select
            id="dept"
            className={selectClass}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            {DEPARTMENTS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          {errors["department"] && (
            <p className="text-xs text-destructive">{errors["department"]}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="priority">Priority / Type</Label>
          <select
            id="priority"
            className={selectClass}
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            <option>Normal</option>
            <option>Emergency</option>
          </select>
        </div>
      </div>

      <Button type="submit" className="mt-5 w-full sm:w-auto">
        <UserPlus className="size-4" /> Add to Queue
      </Button>
    </form>
  );
}
