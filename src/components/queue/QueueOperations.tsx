import { Eye, Play, Trash2, UserPlus, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  onAdd: () => void;
  onServe: () => void;
  onPeek: () => void;
  onClearQueue: () => void;
  onClearAll: () => void;
}

/** Buttons mapped 1:1 to the queue operations. */
export function QueueOperations({ onAdd, onServe, onPeek, onClearQueue, onClearAll }: Props) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Queue Operations</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Each button runs one operation of the queue data structure.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Button variant="outline" onClick={onAdd} className="justify-start">
          <UserPlus className="size-4" />
          Add Patient
          <span className="ml-auto font-mono text-[11px] text-muted-foreground">enqueue()</span>
        </Button>

        <Button onClick={onServe} className="justify-start">
          <Play className="size-4" />
          Serve Next Patient
          <span className="ml-auto font-mono text-[11px] opacity-70">dequeue()</span>
        </Button>

        <Button variant="outline" onClick={onPeek} className="justify-start">
          <Eye className="size-4" />
          View Next Patient
          <span className="ml-auto font-mono text-[11px] text-muted-foreground">peek()</span>
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="justify-start">
              <Trash2 className="size-4" />
              Clear Queue
              <span className="ml-auto font-mono text-[11px] text-muted-foreground">clear()</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Clear the waiting queue?</AlertDialogTitle>
              <AlertDialogDescription>
                This removes every waiting patient. Served patient history is kept.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onClearQueue}>Clear Queue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
              <AlertTriangle className="size-4" />
              Clear All Data
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete all patient data?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete all patient data? This deletes the waiting queue,
                served history, statistics and the patient ID counter. This action cannot be
                undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onClearAll}>Delete Everything</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}
