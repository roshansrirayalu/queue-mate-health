// ============================================================
//  Hospital Patient Queue Management System
//  DSA Implementation: Queue (FIFO) using a simple array
//  This is the reference C++ implementation for the project.
// ============================================================

#include <iostream>
#include <string>
using namespace std;

const int MAX = 100; // maximum patients the queue can hold

// A single patient record
struct Patient {
    string id;          // P001, P002 ...
    string name;
    int    age;
    string gender;
    string department;
    string priority;    // "Normal" or "Emergency"
};

// Queue of patients: insert at REAR, remove from FRONT (FIFO)
class PatientQueue {
private:
    Patient data[MAX];
    int front;  // index of the first (next to be served) patient
    int rear;   // index of the last patient added

public:
    PatientQueue() {
        front = 0;
        rear  = -1;   // empty queue: rear is behind front
    }

    // ENQUEUE - add a patient at the rear   -> O(1)
    void enqueue(Patient p) {
        if (rear == MAX - 1) {
            cout << "Queue is full. Cannot add patient." << endl;
            return;
        }
        data[++rear] = p;
    }

    // DEQUEUE - serve (remove) the front patient -> O(1)
    Patient dequeue() {
        Patient empty;
        if (isEmpty()) {
            cout << "Queue is empty. No patient to serve." << endl;
            return empty;
        }
        return data[front++];
    }

    // PEEK - look at the front patient without removing -> O(1)
    Patient peek() {
        return data[front];
    }

    // ISEMPTY - true when no patient is waiting -> O(1)
    bool isEmpty() {
        return front > rear;
    }

    // SIZE - how many patients are waiting -> O(1)
    int size() {
        return rear - front + 1;
    }

    // Show the queue from FRONT to REAR
    void display() {
        if (isEmpty()) {
            cout << "No patients are currently waiting." << endl;
            return;
        }
        cout << "FRONT -> ";
        for (int i = front; i <= rear; i++) {
            cout << data[i].id << " (" << data[i].name << ")";
            if (i < rear) cout << " -> ";
        }
        cout << " <- REAR" << endl;
    }
};

// ------------------- Demo / driver program -------------------
int main() {
    PatientQueue q;

    q.enqueue({"P001", "Rahul Kumar", 21, "Male",   "General Medicine", "Normal"});
    q.enqueue({"P002", "Ankit Sharma", 34, "Male",   "Cardiology",       "Normal"});
    q.enqueue({"P003", "Priya Singh",  27, "Female", "Orthopedics",      "Emergency"});

    q.display();                                   // FRONT -> P001 -> P002 -> P003 <- REAR
    cout << "Waiting: " << q.size() << endl;       // 3
    cout << "Next   : " << q.peek().name << endl;  // Rahul Kumar (peek does NOT remove)

    Patient served = q.dequeue();                  // FIFO: first in, first out
    cout << "Served : " << served.id << endl;      // P001

    q.display();                                   // FRONT -> P002 -> P003 <- REAR
    return 0;
}
